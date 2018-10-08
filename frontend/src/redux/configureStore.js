import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counter from './modules/counter'
import auth from './modules/auth'
import cart from './modules/cart'
import product from './modules/product'
import * as authActions from './modules/auth'
import * as cartActions from './modules/cart'
import * as productActions from './modules/product'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import curtApi from '../lib/curtApi'

const reducer = combineReducers({
  counter,
  auth,
  cart,
  product,
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

  if (token) {
    store.dispatch(authActions.setToken(token))
    curtApi.auth.verifyToken().then(() => {
      store.dispatch(cartActions.fetchCart())
    })
  }

  store.dispatch(productActions.fetchAllProduct())

  return store
}
export default configureStore
