import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import curtApi from '../../api'
import RegisterImage from '../../assets/register/register-pic.jpg'
import * as authActions from '../../redux/modules/auth'

const Picture = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3em 6em 3em 6em;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 1em;
  }
`
const Center = styled.div`
  margin-left: 5em;
  text-align: left;
  font-size: 17px;
`
const CenterAccount = styled.div`
  padding-top: 1em;
  text-align: left;
  font-size: 17px;
`
const CreateInfo = styled.div`
  text-align: left;
  font-size: 50px;
  font-weight: bold;
`

const Info = styled.div`
  text-align: left;
  font-size: 18px;
  font-weight: bold;
`

const Input = styled.input`
  border-color: black;
  border-width: 1.5px;
  width: 70%;
  height: 2.2em;
  text-align: left;
`

const InputDescription = styled.div`
  font-size: 15px;
  padding-top: 1em;
  text-align: left;
`
const GenderInput = styled.input`
  text-align: left;
  width: 1.5em;
`
const GenderLabel = styled.label`
  font-size: 15px;
`

const SignUpButton = styled.button`
  color: white;
  font-size: 16px;
  margin-top: 20px;
  background-color: #545454;
  padding: 5px 23px;
`

class PersonInfo extends React.Component {
  state = {
    facebookId: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  }

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  register = async () => {
    const success = await curtApi.auth.register(this.state)
    if (success) {
      this.props.login({
        username: this.state.email,
        password: this.state.password,
      })
      window.location = '/'
    } else {
      window.location = '/register'
    }
  }

  render() {
    return (
      <Grid>
        <Center>
          <CreateInfo>Create an account</CreateInfo>
          <Info>Personal Information</Info>
          <InputDescription>Name *</InputDescription>
          <Input
            onChange={this.inputChange}
            name="firstName"
            type="text"
            value={this.state.firstName}
          />
          <InputDescription>Surname *</InputDescription>
          <Input
            onChange={this.inputChange}
            name="lastName"
            type="text"
            value={this.state.lastName}
          />
          <InputDescription>Gender *</InputDescription>
          <GenderInput type="radio" />
          <GenderLabel>Male</GenderLabel>
          <GenderInput type="radio" />
          <GenderLabel>Female</GenderLabel>
          <CenterAccount>
            <Info>Account Information</Info>
            <InputDescription>Email Address *</InputDescription>
            <Input
              onChange={this.inputChange}
              name="email"
              type="email"
              value={this.state.email}
            />
            <InputDescription>Password *</InputDescription>
            <Input
              onChange={this.inputChange}
              name="password"
              type="password"
              value={this.state.password}
            />
            <InputDescription>Confirm Password *</InputDescription>
            <Input
              onChange={this.inputChange}
              name="password2"
              type="password"
              value={this.state.password2}
            />
          </CenterAccount>
          <SignUpButton onClick={this.register}>Sign Up </SignUpButton>
        </Center>
        <Picture>
          <img src={RegisterImage} alt="" width="100%" />
        </Picture>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({ ...state.auth })

const mapDispatchToProps = { ...authActions }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonInfo)
