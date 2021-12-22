const express = require("express");
const path = require("path");
const routes = require("./routes");
const bodyParser = require("body-parser");
const consulConfig = require("./helpers/consulConfig");

const app = express();
const port = process.env.PORT || 3000;

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

const serveBuild = () => {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "./../build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./../build", "index.html"));
  });
};

app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  // initialize
  consulConfig.fetchConsulData();
  serveBuild();
  console.log("NODE SERVER STARTED at PORT : ", port);
});
