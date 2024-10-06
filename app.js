const express = require("express");
const { connectDB } = require("./config/db");
const env = require("dotenv");
const routes = require("./routes/routes");

// load env
env.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
const port = process.env.PORT || 8000;

// check db connection
connectDB();

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
