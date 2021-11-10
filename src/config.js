import { fetchAppConfig } from './services/config.service';

class AppConfig {
  appConfig = {};

  getConfig = (key) => this.appConfig[key];

  setConfig = (data) => {
    this.appConfig = data;
  };

  initializeAppConfig = () => {
    return fetchAppConfig()
      .then((res) => {
        this.setConfig(res?.data);
        return res.data;
      })
      .catch((err) => {
        console.log('FAILED TO FETCH APP_CONFIG');
        throw err;
      });
  };
}

const config = new AppConfig();

export default config;
