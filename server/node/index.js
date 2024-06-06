const express = require('express');
const { createConnection } = require('mysql');


const app = express();

// MySQL database configuration
const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'training'
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});


// Route to fetch states from MySQL database
app.get('/api/states', (req, res) => {
  const sql = 'SELECT * FROM state'; // Assuming you have a table named 'states' in your database

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching states:', err);
      res.status(500).json({ error: 'Error fetching states' });
    } else {
      res.status(200).json({results});
    }
  });
});

// Route to fetch districts by state from MySQL database
app.get('/api/districts/:state', (req, res) => {
    const state_id = req.params.state;
    console.log("state_id :",state_id);
    const sql = 'SELECT * FROM district WHERE state_id = ?'; // Assuming you have a table named 'district' with 'state' column
  
    db.query(sql, [state_id], (err, results) => {
      if (err) {
        console.error('Error fetching districts:', err);
        res.status(500).json({ error: 'Error fetching districts' });
      } else {
        console.log("results :",results);
        res.status(200).json(results);
      }
    });
  });
  

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
