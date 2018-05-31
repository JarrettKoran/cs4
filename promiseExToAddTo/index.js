var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var express = require("express");
var flash = require("connect-flash");
var mongoose = require("mongoose");
var passport = require("passport");
var path = require("path");
var session = require("express-session");

var Info = require("./models/Info");


var setUpPassport = require("./setuppassport");
var routes = require("./routes");
var routesData = require("./routesData");

var app = express();
mongoose.connect("mongodb://localhost:27017/promisedb");
setUpPassport();

app.set("port", process.env.PORT || 3000);

app.use('/', express.static('./'));
app.use('/js', express.static('./public/js'));


app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
//???app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
  secret: "LUp$Dg?,I#i&owP3=9su+OB%`JgL4muLF5YJ~{;t",
  resave: true,
  saveUninitialized: true
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
app.use(routesData);

app.listen(app.get("port"), function() {
  console.log("Server started on port " + app.get("port"));
});
