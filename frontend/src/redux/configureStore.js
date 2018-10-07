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

const reducer = combineReducers({
  counter,
  auth,
  cart,
  product,
})

const configureStore = () => {
  const middlewares = [thunk]
  const store = createStore(
    reducer /* preloadedState, */,
    composeWithDevTools(applyMiddleware(...middlewares)),
  )

  if (localStorage.getItem('token')) {
    store.dispatch(authActions.setToken(localStorage.getItem('token')))
    store.dispatch(cartActions.fetchCart())
    store.dispatch(productActions.fetchAllProduct())
  }

  axios.interceptors.response.use(null, error => {
    if (error.response && error.response.status === 401) {
      store.dispatch(authActions.logout())
      window.location.reload()
    }
    return Promise.reject(error)
  })

  return store
}
export default configureStore
