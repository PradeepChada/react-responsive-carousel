//TO-DO: Need to discuss and anlyse about NODE_ENV and .env files with deployemet team.

export const getUrlConfig = () => {
    let CATELOG_BASE_URL = '';
    let INVENTORY_BASE_URL = '';
    let ASSET_URL = window.location.origin.replace('mobius.', 'www.');
    if(window.location.origin.includes('devpreview') || window.location.origin.includes('localhost')){
        CATELOG_BASE_URL = 'https://catalog-services.devpreview.containerstore.com';
        INVENTORY_BASE_URL = 'https://inventory-services.devpreview.containerstore.com';
        ASSET_URL = 'https://www.devpreview.containerstore.com'
    }

    return {
        CATELOG_BASE_URL,
        INVENTORY_BASE_URL,
        ASSET_URL
    }
}

const urlConfig = getUrlConfig();

export default urlConfig;