const express = require('express')
const dotenv =require("dotenv")
const mongoose =require('mongoose')
const app= express()
dotenv.config()

const connect = async ()=>{
   try {
    await mongoose.connect(process.env.MONGO)
    console.log('connected to mongoDB');
  } catch (error) {
    throw error
  } 
}

mongoose.connection.on("connected",()=>{console.log('mongoDB connected')})
mongoose.connection.on("disconnected",()=>{console.log('mongoDB disconnected')})

app.get("/", (req,res)=>{res.send("hello welcome")})
app.get("/users",(req,res)=>{res.send("hello user")})


app.listen(4000,()=>{
    connect()
    console.log(`connected to backend`)})