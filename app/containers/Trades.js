import { connect } from 'react-redux'
import Trades from '../components/Trades'
const mapStateToProps = (state, ownProps) => (state.trades)
import {Trade,selectTrades,queryStat} from '../utils/db'
import {toggleModal} from '../actions/trades'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPageSelect: page => {
    selectTrades(page,dispatch)
  },
  toggleModal:(values) => {
    console.log(values)
    if(values != null && values.type != 'click'){

      if(!values.person_id){
        values.person_id = 1
      }
      if(!values.trade_type_id){
        values.trade_type_id = 1
      }

      if(!values.trade_date){
        values.trade_date = new Date()
      }
      Trade.build(values).save().then(() => {
        selectTrades(1,dispatch)
        queryStat(dispatch)
      })
    }
    dispatch(toggleModal())
  }

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trades)
