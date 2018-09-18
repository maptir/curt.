import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import counter from './modules/counter'

const reducer = combineReducers({
  counter
})

const configureStore = () => createStore(
  reducer, /* preloadedState, */
  compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default configureStore
