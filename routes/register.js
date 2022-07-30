var express = require('express');
var router = express.Router();
var db = require('../database/connection');

/* GET Register Page. */
router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', (req, res) => {
  const { email, username, password, adno } = req.body;
  
  const sql = `INSERT INTO register VALUES ('${email}', '${username}', '${password}', '${adno}')`;

  db.query(sql, (err, rows, fields) => {
      if (!err) {
          res.send(`<h1>Hello ${req.body.username} Welcome!</h1>`);
          console.log(req.body);
      } else {
          console.log(err);
      }
  })
});


module.exports = router;
