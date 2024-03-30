const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const jwt = require("jsonwebtoken");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "razibrahman991@gmail.com",
    pass: "pjcb ugro thjf vnwc",
  },
});

let registrationController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.send({ error: "please fill the all field" });
  }
  if (password && password.length < 6) {
    return res.send({ error: "password is too small " });
  }

  let existingUser = await User.find({ email: email });

  if (existingUser.length > 0) {
    return res.send({
      error: `${email} already in use `,
    });
  } else {
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });

    bcrypt.hash(password, 10, async function (err, hash) {
      let user = new User({
        name: name,
        email: email,
        password: hash,
        otp: otp,
      });

      user.save();

      jwt.sign({ email: email }, "shhhhh", async function (err, token) {
        const info = await transporter.sendMail({
          from: `"MERNIAN"`,
          to: email,
          subject: "this is verification ",

          html: ` <a href="http://localhost:5173/EmailVerification/${token}">Click Here:<a/>  `,
        });
      });

      // email link or otp timeout
      // setTimeout(async () => {
      //   await User.findOneAndUpdate({ email: email }, { otp: "" });
      //   console.log("done done")
      // }, 10000);
      res.send({
        name: user.name,
        email: user.email,
        role: user.role,
      });
    });
  }

  // res.send(data);
  //hafy gyso zdqu jbor
};

module.exports = registrationController;
