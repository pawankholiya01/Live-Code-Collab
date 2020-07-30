const sessionKey = 'random string';
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-hbs');
var bodyParser = require('body-parser')
var expressValidator = require('express-validator');



var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

require('./passport')

const dbConnstring =  'cloud mongourl';

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/login');
var collabRouter = require('./routes/task');
global.User = require('./models/user');
global.Task = require('./models/task'); 

var app = express();
app.use(expressValidator());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

mongoose.connect(dbConnstring, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(cookieParser());
app.use(session({
  secret: sessionKey,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.user);
    res.locals.user = req.user;
  }
  next();
});



app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/', collabRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
