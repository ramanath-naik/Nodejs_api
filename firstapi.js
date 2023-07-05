const express = require("express")
const app = express()

//routes
app.get('/',(req,res)=>{
    res.send("Hello Node API")
})
//app refers to the Express application instance.
// get is a method in Express that defines a route for handling HTTP GET requests.
// '/' specifies the path for the route, in this case, the root path.
// (req, res) => { ... } is an arrow function that serves as the route handler. It takes two parameters: req (short for request) represents the incoming HTTP request, and res (short for response) represents the outgoing HTTP response.
// res.send("Hello Node API") sends the response with the message "Hello Node API" as the response body.
app.listen(3000, ()=>{      //The app.listen() function is used to bind and listen to the connections on the specified host and port
    console.log("The node API app is running on port 3000 ")

})
//app.listen() is a method in Express that starts the server and listens for incoming connections.
// The first argument 3000 specifies the port number on which the server should listen. In this case, it's port 3000.
// The second argument is an arrow function that will be executed once the server starts listening. 
// It's used here to log a message to the console indicating that the server is running on port 3000