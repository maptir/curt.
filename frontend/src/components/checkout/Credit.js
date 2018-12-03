import React from 'react'
import styled from 'styled-components'
import Limit from '../common/Limit'
import Cleave from 'cleave.js/react'
import axios from 'axios'
import curtApi from '../../api'

const StyledLimit = styled(Limit)`
  max-width: 400px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    margin: 0.25em 0;
  }
`

const AccentButton = styled.button`
  color:white;
  font-size : 16px;
  background-color :#545454
  padding: 5px 23px;
`

class Credit extends React.PureComponent {
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
      const result = await curtApi.orders.checkoutWithCreditCard(card)
      this.props.onPaymentSuccess()
    } catch (error) {
      alert(error.code + ': ' + error.message)
    }
  }
  render() {
    return (
      <StyledLimit>
        <Form onSubmit={this.onCreditCardSubmit} id="card">
          <input
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
          />
          <AccentButton type="submit">Submit</AccentButton>
        </Form>
      </StyledLimit>
    )
  }
}

export default Credit
