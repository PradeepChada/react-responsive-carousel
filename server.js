const express = require("express");
const consul = require("consul");
const isDev = process.env.NODE_ENV !== "production";
const path = require('path')
// const ngrok =
//   (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
//     ? require("ngrok")
//     : false;
// const resolve = require("path").resolve;

const app = express();
let _instance;
// Serve any static files
app.use(express.static(path.join(__dirname, "./build")));

// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

class Features {
  constructor(environment, consulClient) {
    this.consul = consulClient;
    this.environment = environment;
    // this.key = `service/${environment}/pdp-web/APP_CONFIG`;
    this.key = 'service/devpokey/pdp-web/APP_CONFIG'
    // logger.info(`Consul prefix ${this.key}`);
    this.data = {};
    this.watch = this.consul.watch({
      method: this.consul.kv.get,
      options: { key: this.key },
    });
    this.watch.on("change", (data) => {
        console.log("DATA =>", data)
    //   logger.info(
    //     `consul change detected on ${this.key}: ${JSON.stringify(data.Value)}`
    //   );
      try {
        this.data = JSON.parse(data.Value);
      } catch (e) {
        // console.log(
        //   `invalid json found for feature: ${JSON.stringify(data.Value)}`,
        //   e
        // );
      }
    });
  }
}


function instance (environment = 'devpokey', consulClient){
    if (!_instance || consulClient) {
    //   logger.info(`Creating new Features instance`);
      const newFeatures = new Features(environment, consulClient);
      _instance = newFeatures;
      return newFeatures;
    }
    return _instance;
  }
  

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    // logger.error(err.message);
    return;
  }
  // initialize
  instance(
    "dev",
    consul({
      host: "dfwconsv1.containerstore.com",
    })
  );
  // Connect to ngrok in dev mode
});
