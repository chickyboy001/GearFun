var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var users = [
   { name: "Alice", age: 25 },
   { name: "Bob", age: 30 },
   { name: "Charlie", age: 35 },
  ];
  res.render("home", { title: "Trang chủ", users: users });
});

router.get("/test", function (req, res, next) {
 res.render("home", { msg: "Hello world!" });
});




module.exports = router;
