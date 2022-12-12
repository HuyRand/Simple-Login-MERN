const express = require('express');
const mongoose = require("mongoose");
const { User } = require("./models");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// get all users
app.get("/users", async (req, res) => {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
});

// get user from login -> dashboard
app.get("/user/:email", async (req, res) => {
    const  findEmail   = req.params.email;
    const user = await User.find({Email:findEmail});
    return res.status(200).json(user);
});

// Update user
app.put("/UpdateUser",async(req,res) =>{
    let email = req.body.Email
    let password = req.body.Password
    let name = req.body.Name
    let address = req.body.Address
    let dob = req.body.DoB
    try{
        const FindAndUpdate= await User.findOneAndUpdate({Email:email},{$set:{Password:password,Name:name,Address:address,DoB:dob}},{new:true})
        return res.status(200).json('updated')
    }
    catch(err)
    {
        return  res.status(400).json('Server Error');
    }
}
);

// verify - login => return email and password from db
app.post("/verifyAccount", async (req, res) => {
    const  findEmail   = req.body.Email;
    const correlatedPassword = req.body.Password;
    const FindUserCount = await User.find({Email:findEmail}).count();
    const FindUser = await User.find({Email:findEmail})
    if (FindUserCount != 0)
    {
        if (FindUser[0]['Password'] === correlatedPassword)
        {
            return res.status(201).json("verified")
        }
    }
    return res.status(201).json('Email or password is incorrect');
});


//sign up
app.post("/users",  async(req, res) => {

    //Check if email has already been used
    const FindUser = await User.find({Email:req.body.Email}).count();
    if (FindUser === 0)
    {
        //add new user to the db
        const newUser = new User({ ...req.body });
        const insertedUser = await newUser.save();
        return res.status(201).json('Succeed');
    }
    else
    {
        return res.status(201).json('Email is already used')
    }
  });



const start = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://bug_tracker:9CyAmsgKX8UsdrKk@cluster0.mzxrvgu.mongodb.net/?retryWrites=true&w=majority"
        );
        app.listen(5000, () => console.log("Server started on port 5000"));
    } catch (error) {
        console.log("could not connect");
        process.exit(1);
    }
  };

start();



