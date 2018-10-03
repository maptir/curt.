import React from 'react'
import styled from 'styled-components'
import PersonInfo from '../components/register/PersonInfo'
class Register extends React.Component {
  state = {
    msg: 'LoginPage',
  }

  componentDidMount = () => { } // fetch data here

  componentWillUnmount = () => { }

  render() {
    return (
      <div>
        <PersonInfo />
      </div>
    )
  }
}

export default Register
