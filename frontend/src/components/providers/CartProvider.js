import { connect } from 'react-redux'
import * as cartActions from '../../redux/modules/cart'

const CartProvider = props => {
  return props.children({
    cart: props.cart,
    editItem: props.editItem,
    removeItem: props.removeItem,
  })
}

const mapStateToProps = state => ({ ...state.cart })

const mapDispatchToProps = {
  ...cartActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartProvider)
