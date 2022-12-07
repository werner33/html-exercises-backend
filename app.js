var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const accountRouter = require('./routes/accounts');
const emailSubscriptionsRouter = require('./routes/emailSubscriptions')
const awsCredentialsRouter = require('./routes/awsCredentials');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));


app.use(cors());

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/accounts', accountRouter);
app.use('/emailsubscriptions', emailSubscriptionsRouter)
app.use('/awscredentials', awsCredentialsRouter);

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
