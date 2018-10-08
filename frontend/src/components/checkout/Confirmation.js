import React from 'react'
import { Step, Bold, FlexBox } from './Styled'
import curtApi from '../../lib/curtApi'

class Confirmation extends React.Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  completeCheckout = async () => {
    await curtApi.cart.clearCart()    
    window.location = '/checkout/complete'
  }

  render() {
    return (
      <div style={{ marginBottom: '9em' }}>
        <Step>
          Shipping Information &gt; Payment Method &gt;
          <Bold> Confirmation</Bold>
        </Step>
        <Bold>Order Number : </Bold>
        3194719794 <br />
        <Bold>SHIPPING INFORMATION</Bold>
        <div>Kongpon Charanwattanakit</div>
        <div>28/56, Premio Vetro, Ngamwongwan 54, Bangkhen, Ladyao</div>
        <div>Bangkok, Thailand</div>
        <Bold>PAYMENT METHOD : </Bold>
        Credit Cart
        <FlexBox>
          <div
            onClick={() => this.props.continueTo('PAYMENTMETHOD')}
            style={{ flex: 1, cursor: 'pointer' }}
          >
            &lt; RETURN TO PAYMENT
          </div>
          <button
            className="btn btn-dark rounded-0"
            onClick={this.completeCheckout}
          >
            CONFIRM ORDER
          </button>
        </FlexBox>
      </div>
    )
  }
}

export default Confirmation
