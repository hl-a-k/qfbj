// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import trades from './trades'
import stat from './stat'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  trades,
  routing,
  stat,
  form:formReducer
});

export default rootReducer;
