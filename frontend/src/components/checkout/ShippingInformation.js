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
            onClick={() => this.props.continueTo('PAYMENTMETHOD')}
          >
            CONTINUE TO PAYMENT METHOD
          </button>
        </FlexBox>
      </Fragment>
    )
  }
}

export default ShippingInformation
