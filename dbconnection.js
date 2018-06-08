var mysql=require('mysql');
var connection=mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'Mapara',
	database: 'demo'
});
module.exports=connection;