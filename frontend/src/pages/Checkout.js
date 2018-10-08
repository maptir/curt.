import React from 'react'
import styled from 'styled-components'
import CheckoutImage from '../assets/text/checkout-text.png'
import ShippingInformation from '../components/checkout/ShippingInformation'
import Confirmation from '../components/checkout/Confirmation'
import PaymentMethod from '../components/checkout/PaymentMethod'
import Summary from '../components/checkout/Summary'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  padding: 4em;
`

class Checkout extends React.Component {
  state = {
    checkoutState: 'SHIPPINGINFORMATION',
  }

  changeCheckoutState = checkoutState => {
    this.setState({ checkoutState })
  }

  checkoutState = () => {
    switch (this.state.checkoutState) {
      case 'SHIPPINGINFORMATION':
        return (
          <ShippingInformation
            continueTo={() => this.changeCheckoutState('PAYMENTMETHOD')}
          />
        )
      case 'PAYMENTMETHOD':
        return (
          <PaymentMethod
            continueTo={() => this.changeCheckoutState('CONFIRMATION')}
          />
        )
      case 'CONFIRMATION':
        return <Confirmation continueTo={() => this.changeCheckoutState()} />
      default:
        return <div>WRONG CHECKOUT STATE</div>
    }
  }

  render() {
    return (
      <Grid>
        <div>
          <img src={CheckoutImage} alt="" width="50%" />
          {this.checkoutState()}
        </div>
        <Summary />
      </Grid>
    )
  }
}

export default Checkout
