const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 5000;

// Database Connection
const db = mysql.createConnection({
  host: "localhost",       // Replace with your DB host
  user: "root",            // Replace with your DB username
  password: "password",    // Replace with your DB password
  database: "ecommerce",   // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database.");
  }
});

// API Endpoint to Fetch Products
app.get("/api/products", async (req, res) => {
  const query = "SELECT * FROM products WHERE status IN ('returned', 'exchanged')";
  
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Failed to fetch products" });
    } else {
      // Dynamically store the results in the mockProducts variable
      const mockProducts = results.map((product) => ({
        id: product.id,
        name: product.name,
        category: product.category,
        status: product.status,
        reason: product.reason || "",
        details: product.details || "",
        date: product.status === "returned" ? product.returnDate : product.exchangeDate,
      }));

      res.json(mockProducts); // Send to frontend
    }
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
