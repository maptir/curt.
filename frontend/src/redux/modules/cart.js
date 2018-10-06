import curtApi from '../../lib/curtApi'

// Actions
const UPDATE_CART = 'cart/UPDATE_CART'

// Initial State
/**
 * { [_id]: { Product } }
 * [ { product: {}, quantity: 2 } ]
 */
const initialState = {
  cart: [],
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        cart: action.payload,
      }
    default:
      return state
  }
}

// Action Creators
export const editItem = (productId, quantity) => async dispatch => {
  const cart = await curtApi.cart.editItem(productId, quantity)
  dispatch({
    type: UPDATE_CART,
    payload: cart,
  })
}

export const removeItem = itemId => async dispatch => {
  const cart = await curtApi.cart.remoteItem(itemId)
  dispatch({
    type: UPDATE_CART,
    payload: cart,
  })
}
