var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mapara",
  database: "demo"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE task (Id VARCHAR(50) NOT NULL, Title VARCHAR(500) DEFAULT NULL,Status varchar(100),PRIMARY KEY(Id))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});