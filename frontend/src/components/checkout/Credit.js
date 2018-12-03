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

const AccentButton = styled.button`
  color:white;
  font-size : 16px;
  background-color :#545454
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
      const result = await curtApi.orders.checkoutWithCreditCard(card)
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
              <CleaveInput name="holder_name" placeholder="John Doe" />
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
          {/* <input
            placeholder="Card holder Name"
            name="holder_name"
            type="text"
          />
          <Cleave
            name="number"
            placeholder="Credit card number"
            options={{ creditCard: true }}
          />
          <Cleave
            name="expiration"
            placeholder="Expiration date (MM/YY)"
            options={{
              date: true,
              datePattern: ['m', 'y'],
            }}
          />
          <Cleave
            name="security_code"
            placeholder="CVV"
            options={{ numericOnly: true }}
            maxLength="3"
          /> */}
          <AccentButton type="submit">CONFIRM ORDER</AccentButton>
        </form>
      </Limit>
    )
  }
}

export default Credit
