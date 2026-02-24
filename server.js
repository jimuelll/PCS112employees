//API framework
const express = require("express");
//cross origin resource sharing
const cors = require("cors");
//environment variables
require("dotenv").config();
//database connection
const db = require("./config/db");
//routes
const routes = require("./routes");

//utilization of express
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//will allow us to read the url body tags

app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

module.exports = app;
//gQ6V3cFZ4B9Jf370
