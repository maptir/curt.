import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { injectGlobal } from 'styled-components'
import configureStore from './redux/configureStore'
import { Provider } from 'react-redux'

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
