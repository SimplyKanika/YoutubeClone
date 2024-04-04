import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from 'cors'
import bodyParser from "body-parser"
import userRoutes from './routes/user.js'
import videoRoutes from './routes/video.js'
import commentsRoutes from './routes/comments.js'

import path from 'path'

dotenv.config()

// **serverotplogin
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const jwt = require('jsonwebtoken');
// const twilio = require('twilio');

const app=express()
app.use(cors())
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use('/uploads',express.static(path.join('uploads')))


app.get('/',(req,res)=>{
    res.send("Server is working.")
})
app.use(bodyParser.json())

app.use('/user',userRoutes)
app.use('/video',videoRoutes)
app.use('/comment',commentsRoutes)


const PORT= process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server Running on the PORT ${PORT}`)
})


const DB_URL = process.env.CONNECTION_URL
mongoose.connect(DB_URL,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("MongoDB database connected")
}).catch((error)=>{
    console.log(error)
})