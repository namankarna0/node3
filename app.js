const express = require("express")
const dbConnection = require("./database/connection")
const User = require("./models/userModel")
const app = express()

dbConnection()

app.get("/",function(req,res){
    res.json({
        name: "homepage"
    })
})
app.get("/about",function(req,res){
    res.json({
        adress :"Brt",
        age :19,
        name : "naman"
    })
})

app.get("/fetch-users", async function(req,res){
    // response ma user table ma vako user data sent garnu paryo
   const data = await User.find()
   res.json({
    data : data
   })
})

//Fetch data from blog table
app.get("/fetch-blog", async function(req,res){
    const haha = await Blog.find()
    res.json({
        haha : data
    })
})

app.listen(3000,function(){
    console.log("server has started at port 3000")
})
