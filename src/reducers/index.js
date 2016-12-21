import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import usersReducer from './users';
const rootReducer = combineReducers({
 authenticationReducer,
 usersReducer
});

export default rootReducer;
