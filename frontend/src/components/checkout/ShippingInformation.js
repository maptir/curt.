import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  flex: 1;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5em;
`

const Bold = styled.div`
  display: inline;
  font-weight: 900;
`

const Step = styled.div`
  font-weight: 500;
  margin: 1em 0;
`

const InputBox = styled.div`
  margin-bottom: 1em;
`

const Input = styled.input`
  border: 2px solid black;
  width: 100%;
  height: 2.2em;
  text-align: left;
`

const Textarea = styled.textarea`
  border: 2px solid black;
  width: 100%;
  height: 100px;
  text-align: left;
`

const InputDescription = styled.div`
  font-size: 15px;
  padding: 0.5em 0 0.5em;
  text-align: left;
`

const FlexBox = styled.div`
  display: flex;
  margin: 2em 0;
`

class ShippingInformation extends React.Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <Fragment>
        <Step>
          <Bold>Shipping Information</Bold> &gt; Payment Method &gt;
          Confirmation
        </Step>
        <InputBox>
          <InputDescription>Customer Name *</InputDescription>
          <Input type="text" />
        </InputBox>
        <InputBox>
          <InputDescription>Address *</InputDescription>
          <Textarea type="area" />
        </InputBox>
        <Grid>
          <InputBox>
            <InputDescription>District *</InputDescription>
            <Input type="text" />
          </InputBox>
          <InputBox>
            <InputDescription>Country *</InputDescription>
            <Input type="text" />
          </InputBox>
          <InputBox>
            <InputDescription>Postal Code *</InputDescription>
            <Input type="text" />
          </InputBox>
        </Grid>
        <InputBox>
          <InputDescription>Customer Contact *</InputDescription>
          <Input type="text" />
        </InputBox>
        <FlexBox>
          <StyledLink to="/catalog">&lt; RETURN TO CATALOG</StyledLink>
          <button
            className="btn btn-dark rounded-0"
            onClick={this.props.continueTo}
          >
            CONTINUE TO PAYMENT METHOD
          </button>
        </FlexBox>
      </Fragment>
    )
  }
}

export default ShippingInformation
