import React from 'react'
import styled from 'styled-components'
import LoginPage from '../components/login/LoginPage'

class Login extends React.Component {
  state = {
    msg: 'LoginPage',
  }

  componentDidMount = () => { } // fetch data here

  componentWillUnmount = () => { }

  render() {
    return (
      <div>
        <LoginPage />
      </div>
    )
  }
}

export default Login
