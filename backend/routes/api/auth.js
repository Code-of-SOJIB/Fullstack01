var express = require('express');
var router = express.Router();
const registrationController = require('../../controllers/registrationController')
const secureApi = require ('../../middleware/secureApi')



router.post('/registration',registrationController) ;
  
module.exports = router;
