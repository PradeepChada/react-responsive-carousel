import Axios from 'axios';

export const signInUser = (body) => {
  return Axios.post('/api/login', body);
};
