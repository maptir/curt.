import React from 'react'
import styled from 'styled-components'
import LogoImage from '../../assets/logo/logoblack.png'
import { Link } from 'react-router-dom'

const Center = styled.div`
  text-align: center;
  font-size: 18px;
  color: black;
  max-width: 400px;
  width: 100%;
  margin: auto;
`

const Logo = styled.img`
  height: 40px;
  margin: 1em;
`

const LoginSlogan = styled.div`
  margin-top: 15px;
  font-size: 15px;
  font-weight: bold;
`
const LoginCenter = styled.form`
  text-align: left;
`

const LoginButton = styled.button`
  color:white;
  font-size : 16px;
  margin-top: 20px;
  background-color :#545454
  padding: 5px 23px;
`
const InputDescription = styled.div`
  font-size: 15px;
  padding-top: 10px;
  margin-right: 15%;
`
const SignupLink = styled.div`
  font-size: 11px;
  padding-top: 10px;
  color: black;
  text-decoration: none;
  margin-top: 0.5em;
`
const Input = styled.input`
  border-color: black;
  border-width: 1.5px;
  padding: 0.5em;
  width: 100%;
`

class LoginPage extends React.PureComponent {
  onSubmit = e => {
    e.preventDefault()
    alert('logged in')
  }
  render() {
    return (
      <Center>
        <Logo src={LogoImage} alt="" />
        <LoginSlogan>
          ONE ACCOUNT <br />
          FOR EVERY CURT.
        </LoginSlogan>
        <LoginCenter onSubmit={this.onSubmit}>
          <InputDescription>Username</InputDescription>
          <Input type="text" />
          <InputDescription>Password</InputDescription>
          <Input type="password" />
          <div className="text-center">
            <LoginButton type="submit">Login</LoginButton>
            <SignupLink>
              Don't have account?{' '}
              <Link to="/register">
                <u>Sign Up</u>
              </Link>
            </SignupLink>
          </div>
        </LoginCenter>
      </Center>
    )
  }
}

export default LoginPage
