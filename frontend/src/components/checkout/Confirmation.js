import React from 'react'
import { connect } from 'react-redux'
import { Step, Bold, FlexBox } from './Styled'
import * as orderActions from '../../redux/modules/order'

class Confirmation extends React.Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  completeCheckout = async () => {
    await this.props.addOrder({ ...this.props.userInfo })
    window.location = '/checkout/complete'
  }

  render() {
    const userInfo = this.props.userInfo

    return (
      <div style={{ marginBottom: '9em' }}>
        <Step>
          Shipping Information &gt; Payment Method &gt;
          <Bold> Confirmation</Bold>
        </Step>
        <Bold>Order Number : </Bold>
        3194719794 <br />
        <Bold>SHIPPING INFORMATION</Bold>
        <div>{userInfo.name}</div>
        <div>{userInfo.address + ' ' + userInfo.district}</div>
        <div>{userInfo.country + ' ' + userInfo.postalCode}</div>
        <div>{userInfo.contact}</div>
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

const mapStateToProps = state => ({ ...state.order })

const mapDispatchToProps = { ...orderActions }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Confirmation)
