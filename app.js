const express = require('express');
const bp = require('body-parser');
const session = require('express-session');
var multer  = require('multer');
const app = express();
app.use(function  (req,  res,  next) {
    res.header("Access-Control-Allow-Origin",  "*");
    res.setHeader('Access-Control-Allow-Methods',  'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers",  "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(session({secret: 'mykey', saveUninitialized: false, resave: false}));
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
const SERVER_PORT = process.env.PORT || 3333

app.use('/', express.static(__dirname + "/public"));

app.use('/home',require('./routes'))
app.use('/body',require('./routes'))
app.use('/signup',require('./routes/signup'))
app.use('/logout',require('./routes/logout'))
app.use('/login',require('./routes/login'))
app.use('/addproduct',require('./routes/addproduct'))
app.use('/upload',require('./routes/uploads'))
app.use('/view',require('./routes/view'))
app.use('/cart',require('./routes/cart'))
app.use('/remove',require('./routes/cartRemove'))
app.use('/bokdel',require('./routes/productRemove'))
app.use('/checkout',require('./routes/checkout'))
app.use('/search',require('./routes/search'))
app.use('/minmax',require('./routes/search'))
app.use('/wishlist',require('./routes/wishlist'))
app.use('/wishlistremove',require('./routes/wishlistRemove'))
app.use('/message',require('./routes/message'))
app.listen(SERVER_PORT, function () {
    console.log("Server started on http://localhost:3333");
});