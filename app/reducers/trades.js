// @flow
import {PAGE_SELECT,TRADES_INIT} from '../actions/trades';

export default function counter(state = {rows: [], currentPage: 0, pageSize: 10, count: 0, limit: 10}, action) {

  switch (action.type) {
    case PAGE_SELECT:
      return {
        rows: action.rows,
        currentPage: action.page,
        pageSize: state.pageSize,
        count: action.count,
        limit: state.limit
      }
    default:
      return state
  }
}
