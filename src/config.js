//TO-DO: Need to discuss and anlyse about NODE_ENV and .env files with deployemet team.

export const getUrlConfig = () => {
    let API_BASE_URL = '';
    if(window.location.origin.includes('devPreview') || window.location.origin.includes('localhost')){
        API_BASE_URL = 'https://catalog-services.devpreview.containerstore.com/'
    }

    return {
        API_BASE_URL
    }
}

const urlConfig = getUrlConfig();

export default urlConfig;