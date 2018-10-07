require('dotenv').config()
const bodyParser = require('body-parser');
var express = require('express');
var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var sequelize = require('./mysql_connection.js')

/* CONNECT TO MYSQL SERVER */
sequelize.connect()

/*ROUTES*/

require('./routes/routes.js'); 
	
/* INITIALIZE THE APPLICATION */
app.listen(process.env.PORT,()=>{
	console.log("LISTENING ON PORT :- "+process.env.PORT);
});