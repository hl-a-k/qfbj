import { connect } from 'react-redux'
import Stat from '../components/Stat'
const mapStateToProps = (state) => (state.stat)


export default connect(
  mapStateToProps
)(Stat)
