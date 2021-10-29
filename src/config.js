//TO-DO: Need to discuss and anlyse about NODE_ENV and .env files with deployemet team.

import { fetchAppConfig } from "./services/config.service";

// export const getUrlConfig = () => {
//     let CATELOG_BASE_URL = '';
//     let INVENTORY_BASE_URL = '';
//     let ASSET_URL = window.location.origin.replace('mobius.', 'www.');
//     if(window.location.origin.includes('devpreview') || window.location.origin.includes('localhost')){
//         CATELOG_BASE_URL = 'https://catalog-services.devpreview.containerstore.com';
//         INVENTORY_BASE_URL = 'https://inventory-services.devpreview.containerstore.com';
//         ASSET_URL = 'https://www.devpreview.containerstore.com'
//     }

//     return {
//         CATELOG_BASE_URL,
//         INVENTORY_BASE_URL,
//         ASSET_URL
//     }
// }

// const urlConfig = getUrlConfig();


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