import { CHANGE_AUTH } from './types';

export const authenticate = (isLoggedIn) => {
  console.log('inActions', isLoggedIn);
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};
