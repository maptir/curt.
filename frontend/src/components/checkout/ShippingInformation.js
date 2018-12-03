import React, { Fragment } from 'react'
import {
  Step,
  Bold,
  InputBox,
  Input,
  InputDescription,
  Textarea,
  Grid,
  FlexBox,
  StyledLink,
} from './Styled'
class ShippingInformation extends React.Component {
  state = {
    name: '',
    address: '',
    district: '',
    country: '',
    postalCode: '',
    contact: '',
  }

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Fragment>
        <Step>
          <Bold>Shipping Information</Bold> &gt; Confirmation
        </Step>
        <InputBox>
          <InputDescription>Customer Name *</InputDescription>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </InputBox>
        <InputBox>
          <InputDescription>Address *</InputDescription>
          <Textarea
            type="area"
            name="address"
            value={this.state.address}
            onChange={this.handleInputChange}
          />
        </InputBox>
        <Grid>
          <InputBox>
            <InputDescription>District *</InputDescription>
            <Input
              type="text"
              name="district"
              value={this.state.district}
              onChange={this.handleInputChange}
            />
          </InputBox>
          <InputBox>
            <InputDescription>Country *</InputDescription>
            <Input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleInputChange}
            />
          </InputBox>
          <InputBox>
            <InputDescription>Postal Code *</InputDescription>
            <Input
              type="text"
              name="postalCode"
              value={this.state.postalCode}
              onChange={this.handleInputChange}
            />
          </InputBox>
        </Grid>
        <InputBox>
          <InputDescription>Customer Contact *</InputDescription>
          <Input
            type="text"
            name="contact"
            value={this.state.contact}
            onChange={this.handleInputChange}
          />
        </InputBox>
        <FlexBox>
          <StyledLink to="/catalog">&lt; RETURN TO CATALOG</StyledLink>
          <button
            className="btn btn-dark rounded-0"
            onClick={() => {
              this.props.setUserInfo(this.state)
              this.props.continueTo('CONFIRMATION')
            }}
          >
            CONTINUE TO CONFIRMATION
          </button>
        </FlexBox>
      </Fragment>
    )
  }
}

export default ShippingInformation
