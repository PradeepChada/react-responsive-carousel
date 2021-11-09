import { fetchAppConfig } from "./services/config.service";

export const getConfig = key => global.appConfig[key]

const setConfig = data => {
    global.appConfig = data;
}

export const initializeAppConfig = () => {
    return fetchAppConfig()
    .then(res=>{
        setConfig(res?.data);
        return res.data;
    })
    .catch(err => {
        console.log("FAILED TO FETCH APP_CONFIG");
        throw err;
    })
}

export default global.appConfig;