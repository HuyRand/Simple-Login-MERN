const express = require('express');
const mongoose = require("mongoose");
const { User,Task } = require("./models");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// get all users
app.get("/users", async (req, res) => {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
});

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



