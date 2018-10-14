const Sequelize = require('sequelize');

var userSchema={
 user_id:{
 	primaryKey:true,
 	allowNull:false,
 	type:Sequelize.INTEGER,
 },
 contact_id:{
 	allowNull:false,
 	type:Sequelize.INTEGER,
 	 references: {
     // This is a reference to another model
     model: Contacts,

     // This is the column name of the referenced model
     key: 'contacts_id',
	}
 },
 attachment_id:{
 	allowNull:false,
 	type:Sequelize.INTEGER,
 	references{
 		model: Attachment,
 		key:'attachment_id',
 	}

 },
 route_id:{
 	type:Sequelize.INTEGER,
 	allowNull:false,
 	references:{
 		model: Route,
 		key: 'route_id'
 	}
 },
 login_id:{
 	type:Sequelize.INTEGER,
 	allowNull:false,
 	references:{
 		model:Login,
 		key:'login_id'
 	}
 }

}