const express = require("express")
const register =require("../controllers/usercontroller");

// const router = express.Router();
const router = express.Router();



router.post("/register", register)


module.exports=router