const express = require('express');
const sql = require('mssql');

const config = {
  server: 'DESKTOP-4CSS7FV',
  database: 'testdb',
  user: 'sa',
  password: 'sa_123',
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true
} 
};

const app = express();

app.use(express.json()); // Middleware to parse JSON request 

app.post('/api/data', (req, res) => {
  const data = req.body; // Extract the data from the request body

  // Connect to the database
  sql.connect(config)
    .then(pool => {
      // Create a new request object
      const request = pool.request();

      // Set up the SQL statement to insert data into the table
      const query = `INSERT INTO info (id, name) VALUES (@id, @name)`;

      // Set the parameter values
      request.input('id', sql.Int, data.id);
      request.input('name', sql.NVarChar, data.name);
      return request.query(query);
    })
    .then(() => {
      res.status(201).json({ message: 'Data added successfully' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
