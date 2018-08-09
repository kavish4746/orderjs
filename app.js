var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var food=require('./routes/dish_route');
var bill=require('./routes/bill_route');
var billdetail=require('./routes/billdetail_route');
var cusine=require('./routes/cosine_route');
var past=require('./routes/past_record');
var pastrecord=require('./routes/past_orderdetail');
var login=require('./routes/login_route');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/food',food);
app.use('/cusine',cusine);
app.use('/bill',bill);
app.use('/billdetail',billdetail);
app.use('/past',past);
app.use('/login',login);
app.use('/pastrecord',pastrecord);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
