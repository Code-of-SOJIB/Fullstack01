const User = require("../model/userModel");
const bcrypt = require('bcrypt');

let loginController = async (req, res) => {
  const { email, password } = req.body;
    let findUser = await User.findOne({ email: email });
    console.log(findUser.password);
    if (findUser) {
        bcrypt.compare(password, findUser.password, function(err, result) {
            // result == true
            console.log(result)
            if (result) {
                res.send({success:"login Succesfull"})
            } else {
                res.send({error:"Credencial not matched"})
            }
        });
    } else {
        res.send({error:"User Not Found"})
    }

    
  
};

module.exports = loginController;
