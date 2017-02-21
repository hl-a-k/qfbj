import { connect } from 'react-redux'
import Trades from '../components/Trades'
import {pageSelect} from '../actions/trades'

const mapStateToProps = (state, ownProps) => (state.trades)

import {Trade,selectTrades} from '../utils/db'





const mapDispatchToProps = (dispatch, ownProps) => ({
  onPageSelect: page => {
    selectTrades(page,dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trades)
