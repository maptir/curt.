import React from 'react'
import styled from 'styled-components'
import LogoImage from '../../assets/logo/logoblack.png'

const Center = styled.div`
  text-align: center;
  font-size: 18px;
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
const LoginCenter = styled.div`
  text-align: center;

  text-align: left;
`

const LoginButton = styled.button`
  color:white;
  font-size : 16px;
  margin-top: 20px;
  background-color :#545454
  padding: 5px 23px;
`
const InputDes = styled.div`
  font-size: 15px;
  padding-top: 10px;
  margin-right: 15%;
`
const SignupLink = styled.div`
  font-size: 11px;
  padding-top: 10px;
  color: black;
  text-decoration: none;
`
const Input = styled.input`
  border-color: black;
  border-width: 1.5px;
  width: 100%;
`

class LoginPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { visible: false };
  // }

  // show() {
  //   this.setState({ visible: true });
  // }

  // hide() {
  //   this.setState({ visible: false })
  // }

  render() {
    return (
      // <div>
      //   <button onClick={this.show.bind(this)}>show</button>
      //   <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} >
      <div>
        <Center>
          <Logo src={LogoImage} alt="" />
          <LoginSlogan>
            ONE ACCOUNT <br />
            FOR EVERY CURT.
          </LoginSlogan>
          <LoginCenter>
            <InputDes>Username</InputDes>
            <Input type="text" />
            <InputDes>Password</InputDes>
            <Input type="text" />
          </LoginCenter>
          <br />
          <LoginButton>Login</LoginButton>
          <SignupLink>
            Don't have account?{' '}
            <a href="register">
              {' '}
              <u>Sign Up</u>
            </a>
          </SignupLink>
        </Center>
      </div>

      //   </Rodal>
      // </div>
    )
  }
}

export default LoginPage
