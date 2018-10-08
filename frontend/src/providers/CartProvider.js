import { connect } from 'react-redux'
import * as cartActions from '../redux/modules/cart'

const CartProvider = props => {
  return props.children({
    cart: props.cart,
    editCartItem: props.editCartItem,
    removeCartItem: props.removeCartItem,
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
