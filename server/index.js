const express = require("express");
const path = require("path");
const routes = require('./routes');
const app = express();
const consulConfig = require('./helpers/consulConfig');
const port = process.env.PORT || 5000;

app.use('/', routes);

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
