"use strict";

const mysql = require("mysql");

const config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "samso",
  database: "fs_bnb"
};

var connection = mysql.createConnection(config);
connection.connect(err => {
  if (err) {
  console.log(err);
  } else{
  console.log("Database Connected: " + config.host + ":" + config.port);
  }
});

module.exports = connection;

