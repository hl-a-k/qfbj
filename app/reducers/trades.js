// @flow
import {PAGE_SELECT,TOGGLE_MODAL} from '../actions/trades';

export default function counter(state = {rows: [], currentPage: 0, pageSize: 10, count: 0, limit: 10,modalIsOpen:false}, action) {

  switch (action.type) {
    case PAGE_SELECT:
      return {
        rows: action.rows,
        currentPage: action.page,
        pageSize: state.pageSize,
        count: action.count,
        limit: state.limit,
        modalIsOpen:state.modalIsOpen
      }

    case TOGGLE_MODAL:
      var _state = {...state}
      _state.modalIsOpen = !_state.modalIsOpen
      return _state
    default:
      return state
  }
}
