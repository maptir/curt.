// Actions
const REMOVE_ITEM = 'cart/REMOVE_ITEM'
const EDIT_ITEM = 'cart/EDIT_ITEM'

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
    case EDIT_ITEM:
      return state
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(
          lineItem => lineItem.product.id === action.payload.id,
        ),
      }
    default:
      return state
  }
}

// Action Creators
export const editItem = lineItem => ({
  type: EDIT_ITEM,
  payload: lineItem,
})

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: id,
})
