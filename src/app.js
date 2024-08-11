const expres = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");


const app = expres();

dotenv.config();
app.use(cors());
app.use(bodyParser.json()); 


module.exports = app;