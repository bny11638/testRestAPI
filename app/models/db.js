const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

//creating a connection
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

//opening the mysql connection
connection.connect(error=> {
    if (error) throw error;
    console.log("Succesfully connected to the database nutrition.");
});
module.exports=connection;