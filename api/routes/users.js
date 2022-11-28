const express =require("express")

const usersRouter =express.Router()

usersRouter.get("/",(req,res)=>{res.send(" from auth router")})
usersRouter.get("/register",(req,res)=>{res.send(" from auth router register")})


module.exports = usersRouter ; 