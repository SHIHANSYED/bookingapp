const express =require("express")

const authRouter =express.Router()

authRouter.get("/",(req,res)=>{res.send(" from auth router")})
authRouter.get("/register",(req,res)=>{res.send(" from auth router register")})


module.exports = authRouter ; 