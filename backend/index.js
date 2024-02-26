require ('dotenv').config()
var express = require('express');
var router = require('./routes/index');
var app = express();
const mongoConfig = require('./config/mongoConfig')

app.use(express.json());

mongoConfig()
app.use('/',router);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("port running");
});