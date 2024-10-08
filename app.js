const express = require("express");
const { connectDB } = require("./config/db");
const env = require("dotenv");
const routes = require("./routes/routes");
const morgan = require("morgan");

// load env
env.config();

const app = express();
const port = process.env.PORT || 8000;

// check db connection
connectDB();

app.use(express.json());
app.use(morgan("common"));
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
