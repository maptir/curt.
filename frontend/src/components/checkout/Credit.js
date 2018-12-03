import React from 'react'
import styled from 'styled-components'
import Limit from '../common/Limit'
import Cleave from 'cleave.js/react'
import axios from 'axios'
import curtApi from '../../api'
import {
  Step,
  Bold,
  InputBox,
  Input,
  InputDescription,
  Grid,
  FlexBox,
} from './Styled'
import { connect } from 'react-redux'
import Spinner from '../common/Loading'

const AccentButton = styled.button`
  color: white;
  font-size: 16px;
  background-color: #545454;
  padding: 5px 23px;
`

const CleaveInput = Input.withComponent(Cleave)

class Credit extends React.PureComponent {
  state = {
    uploading: false,
  }

  onCreditCardSubmit = async e => {
    e.preventDefault()

    var card_form = document.getElementById('card')
    const card = {
      name: card_form.holder_name.value,
      // number: card_form.number.value,
      number: '4242424242424242',
      expiration_month: card_form.expiration.value.split('/')[0],
      expiration_year: '20' + card_form.expiration.value.split('/')[1],
      security_code: card_form.security_code.value,
    }

    try {
      this.setState({ uploading: true })
      const price = this.props.cart.reduce((acc, cur) => acc + cur.price, 0)
      const result = await curtApi.orders.checkoutWithCreditCard(card, price)
      this.props.onPaymentSuccess()
      this.setState({ uploading: false })
    } catch (error) {
      alert(error.code + ': ' + error.message)
    }
  }
  render() {
    return (
      <Limit>
        <form onSubmit={this.onCreditCardSubmit} id="card">
          <Spinner isOpen={this.state.uploading} text={<div>Loading...</div>} />
          <InputBox>
            <InputDescription>Credit Card Number *</InputDescription>
            <CleaveInput
              name="number"
              placeholder="Credit card number"
              options={{ creditCard: true }}
            />
          </InputBox>
          <Grid>
            <InputBox>
              <InputDescription>Card Holder Name *</InputDescription>
              <CleaveInput
                name="holder_name"
                placeholder="John Doe"
                type="text"
              />
            </InputBox>
            <InputBox>
              <InputDescription>MM / YY *</InputDescription>
              <CleaveInput
                name="expiration"
                placeholder="Expiration date (MM/YY)"
                options={{
                  date: true,
                  datePattern: ['m', 'y'],
                }}
              />
            </InputBox>
            <InputBox>
              <InputDescription>CVV *</InputDescription>
              <CleaveInput
                name="security_code"
                placeholder="3 Digits Code"
                options={{ numericOnly: true }}
                maxLength="3"
              />
            </InputBox>
          </Grid>
          <AccentButton type="submit">CONFIRM ORDER</AccentButton>
        </form>
      </Limit>
    )
  }
}

const mapStateToProps = state => ({ ...state.cart })

export default connect(
  mapStateToProps,
  null,
)(Credit)
