var express=require("express");
var router=express.Router();
var app=express();
var db=require("../database/connection");

router.get("/",(req,res,next)=>{
    res.render("login");
});


router.post("/",(req,res)=>{
    const { username, password } = req.body;
    const findusersql="SELECT * FROM register where username = ? and password = ?"

    
    

    db.query(findusersql, [username,password],(error,results)=>{
        if(results.length > 0){
            var Passworderror=undefined
            Passworderror="error"
            res.render("index", {message: username, login : true});
        }else{
            res.redirect("/login");
        }
    });
});

module.exports = router;
