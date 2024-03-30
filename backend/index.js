require ('dotenv').config()
var express = require('express');
var router = require('./routes/index');
var cors = require('cors')
var app = express();
const mongoConfig = require('./config/mongoConfig')


mongoConfig()
app.use(cors())

app.use(express.json());

app.use('/',router);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("port running");
});