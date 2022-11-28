const express =require("express")

const roomsRouter =express.Router()

roomsRouter.get("/",(req,res)=>{res.send(" from auth router")})
roomsRouter.get("/register",(req,res)=>{res.send(" from auth router register")})


module.exports = roomsRouter ; 