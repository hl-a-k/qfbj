import { connect } from 'react-redux'
import Users from '../components/Users'
import {pageSelect} from '../actions/users'

const mapStateToProps = (state, ownProps) => ({
  data: state.users.data,
  currentPage: state.users.currentPage,
  pageSize: state.users.pageSize,
  total: state.users.total,
  limit: state.users.limit
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPageSelect: page => {
    dispatch(pageSelect(page))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
