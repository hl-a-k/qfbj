// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import users from './users'

const rootReducer = combineReducers({
  users,
  routing
});

export default rootReducer;
