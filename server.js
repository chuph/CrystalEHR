// Dependencies
var express = require("express");
var mongojs = require("mongojs");

// Initialize Express
var app = express();
var bodyParser = require("body-parser");

// Set up a static folder (public) for our web app
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended:false
}));

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "Med_DB";

var Doctors = ["doctors"];
var Patients = ["patients"];
var Notes = ["notes"];


// Use mongojs to hook the databases to the db variable
var doctorDb = mongojs(databaseUrl, Doctors);
var noteDb = mongojs(databaseUrl, Notes);
var patientDb = mongojs(databaseUrl, Patients);


// This makes sure that any errors are logged if mongodb runs into an issue
doctorDb.on("error", function(error) {
  console.log("Database Error:", error);
});

noteDb.on("error", function(error) {
  console.log("Database Error:", error);
});

patientDb.on("error", function(error) {
  console.log("Database Error:", error);
});





// Routes **** DEFAULT PLACES FOR NOW ****
// 1. At the root path, send a simple hello world message to the browser
app.get("/", function(req, res) {
  res.send("Hello world");
});



// ROBERT & PHILS  ROUTES 

app.post("/create",function(req,res){

  doctorDb.doctors.insert({Name:req.body.doctorName,
                              Profession:req.body.doctorType,
                              DocID:req.body.doctorId,
                              HospitalID:req.body.hospitalId},
    function(error,found){
    if(error){
      console.log(error);
    }
    else{
      console.log("New doctor added");
    }
  });
});

// 2. At the "/all" path, display every entry in the Doctors collection
app.get("/all", function(req, res) {
  // Query: In our database, go to the doctors collection, then "find" everything
  doctorDb.doctors.find({}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      console.log(found);
      res.json(found);
    }
  });
});

// 3. At the "/name" path, display every entry in the doctors collection, sorted by name
app.get("/name", function(req, res) {
  // Query: In our database, go to the doctors collection, then "find" everything,
  // but this time, sort it by name (1 means ascending order)
  doctorDb.doctors.find().sort({ Name: 1 }, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      console.log(found);
      res.json(found);
    }
  });
});








app.post("/newPatient",function(req,res){

  console.log(req.body);

  patientDb.patients.insert({ Name:req.body.patientName,
                              Author:req.body.patientNote.author,
                              Note:req.body.patientNote.note,
                              Diagnosis:req.body.patientNote.diagnosis,
                              timestamp:req.body.patientNote.timeStamp,
                              RX:req.body.patientRx,
                              Info:req.body.patientInfo,
                              Calendar: req.body.patientCalendar},
    function(error,found){
    if(error){
      console.log(error);
    }
    else{
      console.log("New Patient added");
    }
  });
});



// 2. At the "/all" path, display every entry in the Patients collection
app.get("/allPatients", function(req, res) {
  // Query: In our database, go to the doctors collection, then "find" everything
  patientDb.patients.find({}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      console.log(found);
      res.json(found);
    }
  });
});



app.get("/allPatients/sort", function(req, res) {
  // Query: In our database, go to the doctors collection, then "find" everything,
  // but this time, sort it by name (1 means ascending order)
  patientDb.patients.find().sort({ Name: 1 }, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      console.log(found);
      res.json(found);
    }
  });
});





// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});