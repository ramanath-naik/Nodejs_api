// const express = require('express');
// const app = express();


// const timestamp = new Date().toISOString();

// app.get('/data', (req, res) => {
//   res.set('Cache-Control', 'public, max-age=3600'); 
//   res.json({ message: 'Hello, world!', timestamp }); 
// });

// app.listen(3001, () => {
//   console.log('Server is running on port 3001');
// });


const express = require('express');
const app = express();

let firstRequest = true;

app.get('/data', (req, res) => {
  // Check if it's the first request or a subsequent request
  if (firstRequest) {
    // For the first request, set the headers and indicate it's from the server
    res.set('Cache-Control', 'public, max-age=3600');
    res.set('X-Response-From', 'Server');
    firstRequest = false; // Update the flag to indicate subsequent requests
  } else {
    // For subsequent requests, only set the Cache-Control header
    res.set('Cache-Control', 'public, max-age=3600');
  }

  // Send the JSON response
  res.json({ message: 'Hello, world!'}); 
});

app.listen(5000, () => {
  console.log('Server is running on port 3003');
});


