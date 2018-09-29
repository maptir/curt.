import React from 'react'
import styled from 'styled-components'
import RegisterImage from '../../assets/register/register-pic.jpg'

const Picture = styled.img`
  width: 170%;
  margin-top: 5em;
  padding-right: 5em;
  padding-buttm: 5em;
`
const Grid = styled.div`
   padding-left : 5%;
   padding-right : 5%;
   padding-bottom: 5%
   padding-top: 5%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 4em;
`
const Center = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 2em
`
const Create = styled.div`
  text-align: left;
  font-size: 30px;
  font-weight: bold;
`

const Info = styled.div`
  text-align: left;
  font-size: 18px;
  font-weight: bold
`

const LoginCenter = styled.div`
  text-align: center;
  padding-left: 35%;
  padding-right: 35%;
  `
const Input = styled.input`
  border-color:black;
  border-width: 1.5px;
  width: 100%;
  text-align: left;
`
const InputDescription = styled.div`
  font-size : 15px;
  padding-top : 10px;
  margin-right : 15%;
  text-align: left;
`
const GenderInput = styled.input`
  width: 100%;
  text-align: left;
`

const SignUpButton = styled.button`
  color:white;
  font-size : 16px;
  margin-top: 20px;
  background-color :#545454
  padding: 5px 23px;
`

class PersonInfo extends React.Component {
  render() {
    return (
      <Grid>
        <Center>
          <Create>Create an account</Create>
          <Info>Personal Information</Info>
             <InputDescription >Name *</InputDescription>
             <Input type="text" />
             <InputDescription >Surname *</InputDescription>
             <Input type="text" />
             <InputDescription >Gender *</InputDescription>
             <GenderInput type="radio" />Male
             <GenderInput type="radio" />Female
          <Info>Account Information</Info>
             <InputDescription >Email Address *</InputDescription>
             <Input type="text" />
             <InputDescription >Password *</InputDescription>
             <Input type="text" />
             <SignUpButton>Sign Up </SignUpButton>
        </Center>
      </Grid>
    );
  }
}

export default PersonInfo