const consul = require("consul");

class ConsulConfig {
  constructor() {
    this.consulData = {};
    this.consulStackData = {};
  }

  loadConfig = (envConfig) => {
    try {
      for (const key in envConfig) {
        this.consulData[key] = this.consulStackData[key] || envConfig[key];
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchConsulData = () => {
    console.log("DEPLOYMENT ENV =>", process.env.DEPLOYMENT_ENVIRONMENT);
    console.log("DEPLOYMENT STACK =>", process.env.DEPLOYMENT_STACK);

    const consulClient = consul({
      host: "dfwconsv1.containerstore.com",
    });
    
    this.environment = `${process.env.DEPLOYMENT_ENVIRONMENT || "dev"}${
      process.env.DEPLOYMENT_STACK || "preview"
    }`;
    const envKey = `service/${process.env.DEPLOYMENT_ENVIRONMENT}/mobius/APP_CONFIG`;
    const envStackKey = `service/${this.environment}/mobius/APP_CONFIG`;

    const watch = consulClient.watch({
      method: consulClient.kv.get,
      options: { key: envKey },
    });
    const watchStack = consulClient.watch({
      method: consulClient.kv.get,
      options: { key: envStackKey },
    });

    // Consul watch for Deployment Env
    watch.on("change", (data) => {
      try {
        const envJson = data ? JSON.parse(data.Value) : {};
        this.consulData = envJson;
        console.log(
          `CONSUL DATA FOR ${process.env.DEPLOYMENT_ENVIRONMENT} =>`,
          this.consulData
        );
        this.loadConfig(envJson);
      } catch (e) {
        console.log(
          `invalid json found for feature for  ${
            process.env.DEPLOYMENT_ENVIRONMENT
          }: ${JSON.stringify(e)}`,
          e
        );
      }
    });

    //Consul watch for Deployment Env + Deployment Stack
    watchStack.on("change", (data) => {
      try {
        const envJson = JSON.parse(data.Value);
        console.log(`CONSUL DATA FOR ${this.environment} =>`, envJson);
        this.consulStackData = envJson;
        this.consulData = { ...this.consulData, ...envJson };
      } catch (e) {
        console.log(
          `invalid json found for feature for ${
            this.environment
          }: ${JSON.stringify(e)}`,
          e
        );
      }
    });
  };

  getConsulData = () => {
    return this.consulData;
  };
}
const consulConfig = new ConsulConfig();

module.exports = consulConfig;
