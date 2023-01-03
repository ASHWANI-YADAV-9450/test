const mongoose = require("mongoose");

async function getConnected(){
    try{
        await mongoose.mongoose.connect("mongodb://localhost:27017/asdfghjkl")
        console.log(`Database is connected`)
    }catch(error){
        console.log(error)
    }
}

getConnected()