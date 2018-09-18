import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './assets/logo.svg'
import RouterView from './router'

import DemoRouterLink from './demo/DemoRouterLink'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <img src={logo} alt="logo" />
          <DemoRouterLink />
          <RouterView />
        </div>
      </Router>
    )
  }
}

export default App
