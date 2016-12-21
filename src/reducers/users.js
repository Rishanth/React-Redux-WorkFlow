import { FETCH_USERS } from '../actions/types';
export default (state = [] , action) => {
  console.log('hey in users',action.type);
  switch (action.type) {
    case FETCH_USERS:
        console.log(action.payload);
       return [...state, ...action.payload.data];
       // console.log('it came here');
        // console.log(action);
      //  if (action.payload === false) {
        //    action.payload = true;
      //  console.log('$$$$$hii');
        //    return [...state, ...action.payload];
      //}
      // else if (action.payload === true) {
        //   action.payload = false;
          // return action.payload;
   // }
}

return state;
};
