import Axios from '../api';

export const fetchAppConfig = () => {
    const config_url = '/api/appconfig';
    return Axios.get(config_url)
}