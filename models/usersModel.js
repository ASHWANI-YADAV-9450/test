const mongoose = require("mongoose");


const userSChema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"]
    },
    email:{
        type:String,
        required:[true, "Please enter your email id"]
    }
})

const user = new mongoose.model("user", userSChema)

module.exports=user;