import React from 'react'
import styled from 'styled-components'
import LogoImage from '../../assets/logo/logoblack.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authActions from '../../redux/modules/auth'
import axios from 'axios'

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
  state = {
    username: '',
    password: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = async e => {
    e.preventDefault()
    const { data: token } = await axios.post(
      'http://localhost:8000/users/login',
      {
        username: this.state.username,
        password: this.state.password,
      },
    )
    this.props.setToken(token)
    this.props.onLoggedIn()
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
          <Input
            name="username"
            onChange={this.onChange}
            value={this.state.username}
            type="text"
          />
          <InputDescription>Password</InputDescription>
          <Input
            name="password"
            onChange={this.onChange}
            value={this.state.password}
            type="password"
          />
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

const mapStateToProps = state => ({
  ...state.auth,
})

const mapDispatchToProps = {
  ...authActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage)
