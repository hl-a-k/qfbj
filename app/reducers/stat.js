// @flow
import {SHOW_STAT} from '../actions/stat';

export default function counter(state = {stat:[]}, action) {

  switch (action.type) {
    case SHOW_STAT:
      return action.stat
    default:
      return state
  }
}
