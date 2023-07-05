//REST api 

const express = require('express');
const app = express();
const fs = require("fs");

//Endpoint to get list of users
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data ); //we can also use res.send
   });
})
// app.get('/listUsers', ...) defines a route for handling HTTP GET requests to the /listUsers path.
// The callback function (req, res) => { ... } is the route handler. It takes two parameters: req represents the request object, and res represents the response object.
// fs.readFile(...) is used to read the contents of the "users.json" file.
// __dirname is a global variable in Node.js that represents the current directory path.
// __dirname + "/" + "users.json" constructs the absolute path to the "users.json" file by concatenating the current directory path and the file name.
// 'utf8' specifies the encoding of the file data.
// The callback function (err, data) => { ... } is called when the file reading operation is complete. If there's an error, it will be logged to the console. Otherwise, the file's contents will be logged and sent as the response.
// console.log(data) logs the file's contents to the console.
// res.end(data) sends the file's contents as the response body.

//create server to listen at 8081
const server = app.listen(8081, function () {
   const host = server.address().address
   const port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})