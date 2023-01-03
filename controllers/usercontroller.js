const mongoose = require("mongoose");
const user = require("../models/usersModel")



const register = async(req,res)=>{
    try{
        const {name,password,email} = req.body

        const User = await user.create({
            name,password,email
        })
        await User.save();
        res.status(200).json({
            status:"Success",
            message: User
        })
    }catch(error){
        res.status(400).json({
            status: "Fail",
            error: error.message
        })
    }
}

module.exports=register;