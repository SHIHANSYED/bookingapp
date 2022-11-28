const express = require('express')
const dotenv =require("dotenv")
const mongoose =require('mongoose')
const app= express()
dotenv.config()

const authRouter =require("./routes/auth")
const usersRouter =require("./routes/users")
const hotelsRouter =require("./routes/hotels")
const roomsRouter =require("./routes/rooms")

const connect = async ()=>{
   try {
    await mongoose.connect(process.env.MONGO)
  } catch (error) {
    throw error
  } 
}

mongoose.connection.on("connected",()=>{console.log('mongoDB connected')})
mongoose.connection.on("disconnected",()=>{console.log('mongoDB disconnected')})

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/hotels', hotelsRouter)
app.use('/api/rooms', roomsRouter)



app.listen(4000,()=>{
    connect()
    console.log(`connected to backend`)})