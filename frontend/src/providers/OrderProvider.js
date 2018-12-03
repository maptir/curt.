import { connect } from 'react-redux'
import * as orderActions from '../redux/modules/order'

const OrderProvider = props => {
  return props.children({
    orderList: props.orderList,
    addOrder: props.addOrder,
    isOrderOpen: props.isOrderOpen,
    openOrder: props.openOrder,
    closeOrder: props.closeOrder,
  })
}

const mapStateToProps = state => ({ ...state.order })

const mapDispatchToProps = {
  ...orderActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderProvider)
