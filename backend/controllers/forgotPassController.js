const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { Long } = require("mongodb");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "razibrahman991@gmail.com",
    pass: "pjcb ugro thjf vnwc",
  },
});

let forgotPassController = async (req, res) => {
  const {  email } = req.body;

  
  let existingUser = await User.find({ email: email });

    console.log(existingUser);
    
    if (existingUser.length > 0) {
        console.log(existingUser);
    } else {
        res.send({error:"user not found"})
    }

    

     

     
   
  

};

module.exports = forgotPassController;
