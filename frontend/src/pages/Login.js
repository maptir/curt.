import React from 'react'
import styled from 'styled-components'
import LoginForm from '../components/login/LoginForm'

class Login extends React.Component {
  state = {
    msg: 'LoginPage',
  }

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }
}

export default Login
