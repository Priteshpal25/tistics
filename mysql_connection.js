const Sequelize = require('sequelize');

var connect = {
  database:process.env.DB_NAME, 
  username:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  host: process.env.DB_HOSTNAME,
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max:process.env.CONNECTION_LIMIT,
    min: 0,
  },
}

const sequelize = new Sequelize(connect);


var connect = ()=>{
	sequelize
	.authenticate()
	.then(() => {
    	console.log('Connection has been established successfully.');
  	})
  	.catch(err => {
    	console.error('Unable to connect to the database:', err);
      });
      
}

var get = ()=>{
	return sequelize
}

var getSequelize = ()=>{
	return Sequelize;
}

module.exports = {
    connect,
    get,
    getSequelize
}
