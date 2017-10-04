var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose"); 

const app = express();
const PORT = process.env.PORT || 3000;
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

// // GET method route
// app.get('/', function (req, res) {
//   res.send('root')
// })

// // POST method route
// app.post('/', function (req, res) {
//   res.send('root')
// })

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
