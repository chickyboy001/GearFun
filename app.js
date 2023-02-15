var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require("express-handlebars");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

require('./models/db')
// Setup Handlebars view engine
app.engine(".hbs", hbs.engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get("/", (req, res) => {
 res.render("home");
});


// Start the server
app.listen(4000, () => {
 console.log("Server listening on port 3000");
});

module.exports = app;
