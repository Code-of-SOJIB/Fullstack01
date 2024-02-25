var express = require('express');
var router = express.Router();
const registrationController = require('../../controllers/registrationController')
const secureApi = require ('../../middleware/secureApi')



router.get('/registration',secureApi,registrationController) ;
  
module.exports = router;
