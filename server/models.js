const mongoose = require("mongoose");

const UserSchema= new mongoose.Schema({
    Name: 
    {
        type: String,
        required: true,
    },
    Email:
    {
        type: String,
        required: true,
    },
    Password:
    {
        type: String,
        required: true,
    },
    Address:
    {
        type: String,
        required: false,
    },
    DoB:
    {
        type: Date,
        required: false,
    },
});
const User = mongoose.model("User", UserSchema)


// const TaskSchema= new mongoose.Schema
// (
//     {
//         Email:
//         {
//             type: String,
//             required: true,
//         },
//         Finished:
//         {
//             type:[],
//             required: false,
//         },
//         inProgress:
//         {
//             type:[],
//             required: false,
//         },
//         ToDo:
//         {
//             type:[],
//             required: false,
//         },
//     }
// )
// const Task = mongoose.model("Task", TaskSchema)
module.exports = { User};