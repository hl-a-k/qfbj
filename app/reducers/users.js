// @flow
import {PAGE_SELECT} from '../actions/users';
function initState() {
  return {
    data: [],
    currentPage: 1,
    pageSize: 10,
    total: 100,
    limit: 10
  }
}

export default function counter(state, action) {
  if (typeof state === 'undefined') {
    return initState()
  }
  switch (action.type) {
    case PAGE_SELECT:
      return {
        data: state.data,
        currentPage: action.page,
        pageSize: state.pageSize,
        total: state.total,
        limit: state.limit
      }
    default:
      return state
  }
}
