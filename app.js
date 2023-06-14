const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path:'./config/.env'})
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const path = require("path")
const useragent = require('express-useragent');
const nocache = require('nocache');
let http = require('http');
const app = express();

app.use(nocache());

// Use middleware as required
app.use(cookieParser());
app.use(bodyParser.text());
app.use(bodyParser.json()); 

app.use(useragent.express());
app.use(express.static('assets'))
app.use(bodyParser.urlencoded({ extended: false }))


let routes = require('./src/routes/index')

routes(app)

const server = http.createServer(app);
let port = process.env.PORT
server.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

server.on('listening', function () {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
});

app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});