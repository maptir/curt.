import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import RouterView from './router'

import Modal from './components/common/Modal'
import AuthProvider from './providers/AuthProvider'
import LoginForm from './components/login/LoginForm'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <AuthProvider>
            {({ isModalOpen, closeModal }) => (
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <LoginForm onLoggedIn={closeModal} />
              </Modal>
            )}
          </AuthProvider>
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
