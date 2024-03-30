var express = require("express");
var router = express.Router();
const registrationController = require("../../controllers/registrationController");
const secureApi = require("../../middleware/secureApi");
const otpController = require("../../controllers/otpController");
const loginController = require("../../controllers/loginControler");
const linkController = require("../../controllers/linkController");
const forgotPassController = require("../../controllers/forgotPassController");
const resetController = require("../../controllers/resetController");
const newemailcontroller = require("../../controllers/newemailcontroller");

router.post("/registration", secureApi, registrationController);
router.post("/login", secureApi, loginController);
router.post("/otpVerification",  otpController);
router.post("/linkVerification",  linkController);
router.post("/forgotPass",  forgotPassController);
router.post('/resetemail', resetController);
router.post('/newresetemail', newemailcontroller);


module.exports = router;
