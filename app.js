// external modules
const express = require("express");
const env = require("dotenv");
const cors = require("cors");

// internal modules
const routes = require("./routes/routes");
const { connectDB } = require("./config/db");
const logger = require("./middleware/logger");

// load env
env.config();

const app = express();
const port = process.env.PORT || 8000;

// check db connection
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
