import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counter from './modules/counter'
import auth from './modules/auth'
import cart from './modules/cart'
import product from './modules/product'
import order from './modules/order'
import * as authActions from './modules/auth'
import * as cartActions from './modules/cart'
import * as productActions from './modules/product'
import * as orderActions from './modules/order'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import curtApi from '../api'

const reducer = combineReducers({
  counter,
  auth,
  cart,
  product,
  order,
})

const configureStore = () => {
  axios.interceptors.response.use(null, error => {
    if (error.response && error.response.status === 401) {
      store.dispatch(authActions.logout())
      window.location.reload()
    }
    return Promise.reject(error)
  })

  const middlewares = [thunk]
  const store = createStore(
    reducer /* preloadedState, */,
    composeWithDevTools(applyMiddleware(...middlewares)),
  )

  const token = localStorage.getItem('token')
  const isAdmin = localStorage.getItem('isAdmin')

  if (token) {
    store.dispatch(authActions.setToken(token))
    store.dispatch(authActions.setAdmin(isAdmin))
    curtApi.auth.verifyToken().then(() => {
      store.dispatch(cartActions.fetchCart())
    })
  }

  store.dispatch(productActions.fetchAllProduct())
  store.dispatch(orderActions.fetchAllOrder())

  return store
}
export default configureStore
