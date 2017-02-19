import { connect } from 'react-redux'
import Trades from '../components/Trades'
import {pageSelect} from '../actions/trades'

const mapStateToProps = (state, ownProps) => (state.trades)

import {Trade} from '../utils/db'





const mapDispatchToProps = (dispatch, ownProps) => ({
  onPageSelect: page => {
    Trade.findAndCountAll({
      offset: (page - 1) * 10,
      limit: 10
    }).then(result => {
      dispatch(pageSelect(result.rows,result.count,page))
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trades)
