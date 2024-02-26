const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

let registrationController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.send({ error: "please fill the all field" });
  }

  if (password && password.length > 6) {
    return res.send({ error: "password is too small " });
  }

  let existingUser = await User.find({ email: email });

  if (existingUser.length > 0) {
    return res.send({
      error: `${email} already in use `,
    });
  } else {
    bcrypt.hash(password, 10, async function (err, hash) {
      let user = new User({
        name: name,
        email: email,
        password: hash,
      });

      user.save();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "razibrahman@gmail.com",
          pass: "ftnt mcie usoa wwes",
        },
      });
      const info = await transporter.sendMail({
        from: "razibrahman@gmail.com", // sender address
        to: email, // list of receivers
        subject: "this is verification ", // Subject line

        html: "<b>Hello world?</b>", // html body
      });
      res.send({
        name: user.name,
        email: user.email,
        role: user.role,
      });
    });
  }

  console.log("database data jabe");
  // res.send(data);
  //hafy gyso zdqu jbor
};

module.exports = registrationController;
