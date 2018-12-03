import curtApi from '../../api'

const GET_ORDERS = 'order/GET_ORDERS'
const ADD_ORDER = 'order/ADD_ORDER'
const OPEN_ORDER = 'order/OPEN_ORDER'
const CLOSE_ORDER = 'order/CLOSE_ORDER'

const initialState = {
  orderList: [],
  isOrderOpen: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orderList: action.payload,
      }
    case ADD_ORDER:
      return {
        ...state,
        orderList: [...state.orderList, action.payload],
      }
    case OPEN_ORDER:
      return { ...state, isOrderOpen: true }
    case CLOSE_ORDER:
      return { ...state, isOrderOpen: false }
    default:
      return state
  }
}

export const fetchAllOrder = () => async dispatch => {
  const orderList = await curtApi.orders.fetchAllOrder()
  dispatch({
    type: GET_ORDERS,
    payload: orderList,
  })
}

export const addOrder = order => async dispatch => {
  const addedOrder = await curtApi.orders.addOrder(order)
  // Clear user cart after add order
  await curtApi.cart.clearCart()
  dispatch({
    type: ADD_ORDER,
    payload: addedOrder,
  })
}

export const openOrder = () => ({ type: OPEN_ORDER })
export const closeOrder = () => ({ type: CLOSE_ORDER })
