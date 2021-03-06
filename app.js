var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http=require('http');
var routes = require('./routes/index');
var users = require('./routes/users');

var multer = require('multer');
var mongoose = require('mongoose');

var session = require('express-session');


var multer = require('multer');
var mongoose = require('mongoose');

var session = require('express-session');


global.dbHandel = require('./database/dbHandel');
global.db = mongoose.connect("mongodb://localhost:27017/nodedb");

var app = express();

// 下边这里也加上 use(multer())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(cookieParser());
    app.use(session({  
        resave: false,  
        saveUninitialized: true,  
        cookie: {maxAge:3600000},  
        secret: "test"
    }));  




app.use(function(req,res,next){ 
    res.locals.user = req.session.user;   // 从session 获取 user对象
    var err = req.session.error;   //获取错误信息
    delete req.session.error;
    res.locals.message = "";   // 展示的信息 message
    if(err){ 
        res.locals.message = '<div class="alert alert-danger" style="margin-bottom:20px;color:red;">'+err+'</div>';
    }
    next();  //中间件传递
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine("html",require("ejs").__express); 
// or   app.engine("html",require("ejs").renderFile);
//app.set("view engine","ejs");
app.set('view engine', 'html');
//app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('/'));
app.use('/', routes);
app.use('/users', users);
app.use('/login',routes); // 即为为路径 /login 设置路由路
app.use('/register',routes); // 即为为路径 /register 设置路由路
app.use('/board',routes); // 即为为路径 /board 设置路由


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

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
