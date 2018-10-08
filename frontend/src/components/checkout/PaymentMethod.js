import React, { Fragment } from 'react'
import {
  Step,
  Bold,
  InputBox,
  Input,
  InputDescription,
  Grid,
  FlexBox,
  StyledLink,
} from './Styled'

class PaymentMethod extends React.Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <Fragment>
        <Step>
          Shipping Information &gt;
          <Bold> Payment Method</Bold> &gt; Confirmation
        </Step>
        <div className="m-1">
          <input type="checkbox" className="mr-1" />
          <Bold>Credit Card Payment</Bold>
        </div>
        <InputBox>
          <InputDescription>Credit Card Number *</InputDescription>
          <Input type="text" />
        </InputBox>
        <Grid>
          <InputBox>
            <InputDescription>Card Holder Number *</InputDescription>
            <Input type="text" />
          </InputBox>
          <InputBox>
            <InputDescription>MM / YY *</InputDescription>
            <Input type="text" />
          </InputBox>
          <InputBox>
            <InputDescription>CVV *</InputDescription>
            <Input type="text" />
          </InputBox>
        </Grid>
        <div className="m-1">
          <input type="checkbox" className="mr-1" />
          <Bold>Prompt Pay</Bold>
        </div>
        <InputBox>
          <InputDescription>Customer Email *</InputDescription>
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

export default PaymentMethod
