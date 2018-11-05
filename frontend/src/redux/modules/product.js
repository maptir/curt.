import curtApi from '../../lib/curtApi'

// Actions
const GET_PRODUCTS = 'product/GET_PRODUCTS'

// Initial State
const initialState = {
  productList: [],
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        productList: action.payload,
      } // new state
    default:
      return state
  }
}

// Action Creators
export const fetchAllProduct = () => async dispatch => {
  const productList = await curtApi.products.fetchAllProduct()
  dispatch({
    type: GET_PRODUCTS,
    payload: productList,
  })
}

export const addProduct = product => async dispatch => {
  await curtApi.products.addProduct(product)
  dispatch(fetchAllProduct())
}
