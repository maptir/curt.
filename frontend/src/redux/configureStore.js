import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counter from './modules/counter'
import auth from './modules/auth'
import * as authActions from './modules/auth'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'

const reducer = combineReducers({
  counter,
  auth,
})

const configureStore = () => {
  const middlewares = [thunk]
  const store = createStore(
    reducer /* preloadedState, */,
    composeWithDevTools(applyMiddleware(...middlewares)),
  )

  if (localStorage.getItem('token')) {
    store.dispatch(authActions.setToken(localStorage.getItem('token')))
  }

  axios.interceptors.response.use(null, error => {
    if (error.response.status === 401) {
      store.dispatch(authActions.removeToken())
      window.location.reload()
    }
    return Promise.reject(error)
  })

  return store
}
export default configureStore
