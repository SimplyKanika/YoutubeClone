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


// **otplogin
// **MongoDB connection setup
// **mongoose.connect('DB_URL', { useNewUrlParser: true, useUnifiedTopology: true });

//** */ User model schema (assuming you have a User model)
// const User = require('./models/User');

//** */ Twilio setup
// const accountSid = process.env.TWILIO_SID;
// const authToken = process.env.TWILIO_AUTHTOKEN;
// const client = new twilio(accountSid, authToken);

//** */ Express middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// **Passport configuration
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// **Routes
// app.post('/loginWithOTP', async (req, res) => {
//   const { phoneNumber } = req.body;

  // **Generate OTP
  // const otp = Math.floor(100000 + Math.random() * 900000);

  // **Store OTP and user's phone number in a temporary data store
  //** */ For simplicity, you can use an in-memory store or a temporary database collection
  // temporaryDataStore[phoneNumber] = otp;

  // **Send OTP via SMS using Twilio
//   try {
//     await client.messages.create({
//       body: `Your OTP for login: ${otp}`,
//       to: `+${phoneNumber}`,
//       from: 'YOUR_TWILIO_PHONE_NUMBER',
//     });

//     res.status(200).json({ success: true, message: 'OTP sent successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Failed to send OTP' });
//   }
// });

// app.post('/verifyOTP', async (req, res) => {
//   const { phoneNumber, otp } = req.body;

  //** */ Retrieve the stored OTP for the user
  // const storedOTP = temporaryDataStore[phoneNumber];

  //**Compare the entered OTP with the stored OTP
  // if (storedOTP && storedOTP === otp) {
    // **OTP is valid, generate JWT token for authentication
    // const token = jwt.sign({ phoneNumber }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });

    // res.status(200).json({ success: true, token });
  // } else {
        //** */ Invalid OTP
    // res.status(401).json({ success: false, message: 'Invalid OTP' });
  // }
// });
//endshere

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