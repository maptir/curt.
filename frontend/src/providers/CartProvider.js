import { connect } from 'react-redux'
import * as cartActions from '../redux/modules/cart'

const CartProvider = props => {
  return props.children({
    cart: props.cart,
    editCartItem: props.editCartItem,
    removeCartItem: props.removeCartItem,
    isCartOpen: props.isCartOpen,
    openCart: props.openCart,
    closeCart: props.closeCart,
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
