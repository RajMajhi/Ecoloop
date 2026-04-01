const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const testRoutes = require("./routes/testRoutes");
app.use("/api", testRoutes);

module.exports = app;
