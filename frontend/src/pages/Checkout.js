import React from 'react'
import styled from 'styled-components'
import CheckoutImage from '../assets/text/checkout-text.png'
import ShippingInformation from '../components/checkout/ShippingInformation'
import Confirmation from '../components/checkout/Confirmation'
import PaymentMethod from '../components/checkout/PaymentMethod'
import Summary from '../components/checkout/Summary'

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  max-width: 1400px;
  margin: 4em auto 3em auto;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

class Checkout extends React.Component {
  state = {
    checkoutState: 'SHIPPINGINFORMATION',
    userInfo: {
      name: '',
      address: '',
      district: '',
      country: '',
      postalCode: '',
      contact: '',
    },
  }

  changeCheckoutState = checkoutState => {
    this.setState({ checkoutState })
  }

  setUserInfo = userInfo => {
    this.setState({ userInfo })
  }

  checkoutState = () => {
    switch (this.state.checkoutState) {
      case 'SHIPPINGINFORMATION':
        return (
          <ShippingInformation
            continueTo={this.changeCheckoutState}
            setUserInfo={userInfo => this.setUserInfo(userInfo)}
          />
        )
      case 'PAYMENTMETHOD':
        return <PaymentMethod continueTo={this.changeCheckoutState} />
      case 'CONFIRMATION':
        return (
          <Confirmation
            continueTo={this.changeCheckoutState}
            {...this.state.userInfo}
          />
        )
      default:
        return <div>WRONG CHECKOUT STATE</div>
    }
  }

  render() {
    return (
      <Flex>
        <div>
          <img src={CheckoutImage} alt="" width="50%" />
          {this.checkoutState()}
        </div>
        <Summary />
      </Flex>
    )
  }
}

export default Checkout
