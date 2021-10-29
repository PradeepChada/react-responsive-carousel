const express = require("express");
const consul = require("consul");
const path = require("path");
const health = require("./routes/Health");
const about = require("./routes/About");
const NODE_ENV = process.env.DEPLOYMENT_ENVIRONMENT || "dev";
const app = express();
let _instance;

app.use("/health", health);
app.use("/about", about);
const serveBuild = () => {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "./build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./build", "index.html"));
  });
};

const loadEnv = (envConfig) => {
  try {
    for (const key in envConfig) {
      process.env[key] = process.env[key] || envConfig[key];
    }
  } catch (err) {
    console.error(err);
  }
};

const fetchConsulData = () => {
  const consulClient = consul({
    host: "dfwconsv1.containerstore.com",
  });
  const environment = NODE_ENV;
  if (!_instance || consulClient) {
    const key = `app/${environment}/mobius/APP_CONFIG`;
    // const key = `service/devpreview/pdp-web/APP_CONFIG`;
    const watch = consulClient.watch({
      method: consulClient.kv.get,
      options: { key: key },
    });
    watch.on("change", (data) => {
      try {
        const envJson = JSON.parse(data.Value);
        _instance = envJson;
        loadEnv(envJson);
        console.log("ENV FILES =>", process.env.DEPLOYMENT_ENVIRONMENT);
      } catch (e) {
        console.log(
          `invalid json found for feature: ${JSON.stringify(data.Value)}`,
          e
        );
      }
    });
  }
};

app.get("/api/appconfig", (req, res) => {
  res.json(_instance);
});

// In production we need to pass these values in instead of relying on webpack
const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  // initialize
  fetchConsulData();
  serveBuild();
  console.log("NODE SERVER STARTED");
  // Connect to ngrok in dev mode
});
