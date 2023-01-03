const express = require("express");
const app = express();
require("./config/database")


const routes = require("./routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use("/",routes)


app.get("/", (req,res)=>{
    res.send("Hello")
})


app.listen(3000, ()=>{
    console.log(`Server is runnig on port 3000`)
})