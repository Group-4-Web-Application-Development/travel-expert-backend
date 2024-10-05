const express = require("express");
const dbcon = require("./config/db");
const env = require("dotenv");

// load env
env.config();

const app = express();
const PORT = process.env.PORT || 8000;

// check db connection
dbcon.getConnection((err, conn) => {
  if (err) throw err;

  conn.query("SELECT 1", (err) => {
    conn.release();
    if (err) {
      console.error("Database connection failed:", err.message);
      return;
    }
  });
  console.log("Database connected successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
