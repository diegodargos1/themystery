const express = require("express");
const routes = require("./src/routes");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(
  //"mongodb+srv://dargos:mat333@cluster0-v9sov.mongodb.net/initial?retryWrites=true&w=majority",
  "mongodb+srv://dargos:mat333@cluster0-uc4kp.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(PORT);
