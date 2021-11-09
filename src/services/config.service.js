import Axios from '../api';

export const fetchAppConfig = () => {
    const configUrl = '/api/appconfig';
    return Axios.get(configUrl)
}
