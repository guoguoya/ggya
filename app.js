var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var serverConfig = require('./config');
process.env.root = serverConfig.root ;

var routes = require('./routes/index');
var users = require('./routes/users');
var article = require('./control/articleCenter');
//control 
var data = require('./control/data');
var center = require('./control/controlCenter');

//webpack hot
var webpack = require('webpack')
var WebpackDevMiddleware = require('webpack-dev-middleware')
var WebpackHotMiddleware = require('webpack-hot-middleware')

var config = require('./webpack.dev.config');
var compiler = webpack(config);

var app = express();

app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}));

app.use(WebpackHotMiddleware(compiler, {
  log: console.log
}));

console.log('heheda='+ process.env.TITLE);
console.log('dirname='+__dirname);
console.log('app.js');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// jsonrouter pagerouter
app.use('/article', article);
app.use('/users', users);
app.use('/data', data);
app.use('/', routes);


//不管什么路径都给出这个,而且每次页面跳转都会访问这个。
app.get('*', function (req, res) {
  console.log('one request from client to server.')
  res.sendFile(path.join(__dirname,'/routes/index.html'))
})

//control

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
