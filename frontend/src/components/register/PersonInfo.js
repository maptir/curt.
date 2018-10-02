import React from 'react'
import styled from 'styled-components'
import RegisterImage from '../../assets/register/register-pic.jpg'

const Picture = styled.img`
  padding-left: 5em;
  padding-right: 5em;
  width: 50em;
  height: 34em;
`
const Grid = styled.div`
  padding: 5em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
`
const Center = styled.div`
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
  font-weight: bold
`

const Input = styled.input`
  border-color:black;
  border-width: 1.5px;
  width: 60%;
  height: 2.2em;
  text-align: left;
`

const InputDescription = styled.div`
  font-size : 15px;
  padding-top : 5px;
  text-align: left;
`
const GenderInput = styled.input`
  text-align: left
  width: 1.5em;
`
const GenderLabel = styled.label`
  font-size:10px;
`

const SignUpButton = styled.button`
  color:white;
  font-size : 16px;
  margin-top: 20px;
  background-color :#545454
  padding: 5px 23px;+
`

class PersonInfo extends React.Component {
  render() {
    return (
      <Grid>
        <Center>
           <CreateInfo>Create an account</CreateInfo>
           <Info>Personal Information</Info>
           <InputDescription >Name *</InputDescription>
           <Input type="text" />
           <InputDescription >Surname *</InputDescription>
           <Input type="text" />
           <InputDescription >Gender *</InputDescription>
           <GenderInput type="radio" />
           <GenderLabel>Male</GenderLabel>
           <GenderInput type="radio" />
           <GenderLabel>Female</GenderLabel>
        <CenterAccount>
            <Info>Account Information</Info>
            <InputDescription >Email Address *</InputDescription>
            <Input type="text" />
            <InputDescription >Password *</InputDescription>
            <Input type="text" /><br />
            <SignUpButton>Sign Up </SignUpButton>
        </CenterAccount>
        </Center>
        <Center>
          <Picture src={RegisterImage} alt="" />
        </Center>
      </Grid>
    );
  }
}

export default PersonInfo