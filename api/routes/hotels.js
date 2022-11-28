const express =require("express")

const hotelsRouter =express.Router()

hotelsRouter.post("/",(req,res)=>{res.send(" from auth router")})
hotelsRouter.get("/register",(req,res)=>{res.send(" from auth router register")})


module.exports = hotelsRouter ; 