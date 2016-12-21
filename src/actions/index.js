import { CHANGE_AUTH } from './types';
import { FETCH_USERS } from './types';
import axios from 'axios';
export const authenticate = (isLoggedIn) => {
  console.log('inActions', isLoggedIn);
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};

export const fetchUsers = () => {
  console.log('infetch');
  const request =  axios.get('http://jsonplaceholder.typicode.com/users');
  return {
    type: FETCH_USERS,
    payload: request
  };
};
