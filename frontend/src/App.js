import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './assets/logo.svg'
import RouterView from './router'
import styled from 'styled-components'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <RouterView />
        </div>
      </Router>
    )
  }
}

export default App
