import { CHANGE_AUTH } from '../actions/types';

export default (state = false , action) => {
  switch (action.type) {
    case CHANGE_AUTH:
       // console.log('it came here');
        // console.log(action);
      //  if (action.payload === false) {
        //    action.payload = true;
            return action.payload;
      //}
      // else if (action.payload === true) {
        //   action.payload = false;
          // return action.payload;
   // }
}

return state;
};
