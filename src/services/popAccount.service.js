import Axios from '../api';
import config from '../config';

export const getAccountByPhone = (phone) => {
  const { pop_url } = config.appConfig;
  const url = `${pop_url}/customers/search/find-by-phone-pop-only?phone=${phone}`;
  return Axios.get(url);
};

export const getAccountByEmail = (email) => {
  const { pop_url } = config.appConfig;
  const url = `${pop_url}/customers/search/find-by-profile-email-pop-only?email=${email}`;
  return Axios.get(url);
};
