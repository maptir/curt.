import React from 'react'
import styled from 'styled-components'
import CartItem from '../cart/CartItem'
import CartProvider from '../../providers/CartProvider'

const Container = styled.div`
  background-color: #f8f8f8;
  padding: 2em;
`

const Header = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin: 1em;
`

const FlexBox = styled.div`
  display: flex;
  margin: 1em;
`

const Flex1 = styled.div`
  flex: 1;
`

const Total = styled.div`
  font-size: 20px;
  font-weight: 900;
`

class Summary extends React.Component {
  state = {
    msg: 'CheckoutPage',
  }

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <CartProvider>
        {({ cart }) => {
          const totalPrice = cart
            .reduce((acc, cur) => acc + cur.price, 0)
            .toLocaleString()
          return (
            <Container>
              <Header>SUMMARY</Header>
              {cart.map((product, index) => (
                <CartItem key={index} {...product} />
              ))}
              <hr />
              <FlexBox>
                <Flex1>SUBTOTAL</Flex1>
                {totalPrice} Baht.
              </FlexBox>
              <FlexBox>
                <Flex1>SHIPPING</Flex1>0 Baht.
              </FlexBox>
              <hr />
              <FlexBox>
                <Flex1>TOTAL</Flex1>
                <Total>{totalPrice} Baht.</Total>
              </FlexBox>
            </Container>
          )
        }}
      </CartProvider>
    )
  }
}

export default Summary
