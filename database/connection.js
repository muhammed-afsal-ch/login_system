var express=require("express");
var router=express.Router();
var mysql=require("mysql");


//db connection

var db=mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users"
})

db.connect((err)=>{
  if (err) {
    throw err;
  }
  console.log("Connected");
});

module.exports = db;