import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { injectGlobal } from 'styled-components'
import configureStore from './redux/configureStore'
import { Provider } from 'react-redux'

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'fabric/dist/fabric'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import 'pretty-checkbox/dist/pretty-checkbox.css'
import 'react-table/react-table.css'

import 'rodal/lib/rodal.css'

injectGlobal`
  * {
    font-family: 'Nunito Sans', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    position: relative;
  }

  button {
    border: none;
    cursor: pointer;
  }

  button:focus {
    outline: 0 !important;
  }

  input[type=range]::-moz-range-track {
    background-color: black;
  }
`

const store = configureStore()

// eslint-disable-next-line
Omise.setPublicKey('pkey_test_5e65ne8zi04ddn5umqj')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
