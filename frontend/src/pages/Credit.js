import React from 'react'
import styled from 'styled-components'
import Limit from '../components/common/Limit'
import Cleave from 'cleave.js/react'
import axios from 'axios'
const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000'

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
  onCreditCardSubmit = e => {
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
    console.log(card)

    // eslint-disable-next-line
    Omise.createToken('card', card, async (statusCode, response) => {
      console.log(response)
      if (statusCode == 200) {
        // Success: send back the TOKEN_ID to your server to create a charge.
        // The TOKEN_ID can be found in `response.id`.
        const { data } = await axios.post(`${API_URL}/checkout_credit`, {
          token: response.id,
        })
        console.log(data)
      } else {
        // Error: display an error message. Note that `response.message` contains
        // a preformatted error message. Also note that `response.code` will be
        // "invalid_card" in case of validation error on the card.

        // Example Error displaying
        alert(response.code + ': ' + response.message)
      }
    })
  }
  render() {
    return (
      <StyledLimit>
        <Form onSubmit={this.onCreditCardSubmit} id="card">
          <input
            placeholder="Card Holder Name"
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
