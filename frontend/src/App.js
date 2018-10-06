import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import RouterView from './router'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route
            component={() => {
              window.scrollTo(0, 0)
              return null
            }}
          />

          <RouterView />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
