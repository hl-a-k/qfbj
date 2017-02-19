// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import trades from './trades'

const rootReducer = combineReducers({
  trades,
  routing
});

export default rootReducer;
