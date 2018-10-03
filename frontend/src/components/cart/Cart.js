import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'
import Mock1 from '../../assets/shoes/mock1.jpg'
import Mock2 from '../../assets/shoes/mock2.jpg'
import Mock3 from '../../assets/shoes/mock3.jpg'
import Mock4 from '../../assets/shoes/mock4.jpg'

const Overlay = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: all 300ms;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 400px;
  height: 100vh;
  top: 0;
  right: ${props => (props.isOpen ? '0' : '-400px')};
  background-color: white;
  z-index: 99999;
  transition: all 300ms;
  @media (max-width: 480px) {
    width: 90vw;
  }
`

const Padding = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0px 20px;
  min-height: 0;
`

const Head = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 20px;
  text-align: left;
`

const Promotion = styled.div`
  border: 1px solid black !important;
  text-align: center;
  padding: 25px;
  font-size: 12px;
`

const ScrollItem = styled.div`
  flex: 1;
  overflow-y: auto;
  visibility: hidden;

  :hover,
  :focus {
    visibility: visible;
  }
`

const ScrollItemContent = styled.div`
  visibility: visible;
`

const Close = styled.div`
  cursor: pointer;
`

const Checkout = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  padding: 2em 1em;
`

const Price = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
`

const SubTotal = styled.div`
  flex: 1;
  font-size: 14px;
`

const SumPrice = styled.div`
  font-size: 20px;
`

class Cart extends React.Component {
  state = {
    cartItemList: [
      {
        id: 1,
        name: 'Converse',
        imageUrl: Mock1,
        price: 1900,
        size: '8',
      },
      {
        id: 2,
        name: 'Nike',
        imageUrl: Mock2,
        price: 5900,
        size: '4',
      },
      {
        id: 3,
        name: 'Vans',
        imageUrl: Mock3,
        price: 19010,
        size: '10',
      },
      {
        id: 4,
        name: 'Adidas',
        imageUrl: Mock4,
        price: 100,
        size: '5',
      },
      {
        id: 1,
        name: 'Converse',
        imageUrl: Mock1,
        price: 1900,
        size: '8',
      },
      {
        id: 2,
        name: 'Nike',
        imageUrl: Mock2,
        price: 5900,
        size: '4',
      },
      {
        id: 3,
        name: 'Vans',
        imageUrl: Mock3,
        price: 19010,
        size: '10',
      },
      {
        id: 4,
        name: 'Adidas',
        imageUrl: Mock4,
        price: 100,
        size: '5',
      },
      {
        id: 1,
        name: 'Converse',
        imageUrl: Mock1,
        price: 1900,
        size: '8',
      },
      {
        id: 2,
        name: 'Nike',
        imageUrl: Mock2,
        price: 5900,
        size: '4',
      },
      {
        id: 3,
        name: 'Vans',
        imageUrl: Mock3,
        price: 19010,
        size: '10',
      },
      {
        id: 4,
        name: 'Adidas',
        imageUrl: Mock4,
        price: 100,
        size: '5',
      },
      {
        id: 1,
        name: 'Converse',
        imageUrl: Mock1,
        price: 1900,
        size: '8',
      },
      {
        id: 2,
        name: 'Nike',
        imageUrl: Mock2,
        price: 5900,
        size: '4',
      },
      {
        id: 3,
        name: 'Vans',
        imageUrl: Mock3,
        price: 19010,
        size: '10',
      },
      {
        id: 4,
        name: 'Adidas',
        imageUrl: Mock4,
        price: 100,
        size: '5',
      },
    ],
  }

  render() {
    return (
      <div>
        <Overlay isOpen={this.props.isOpen} onClick={this.props.onClose} />
        <Container isOpen={this.props.isOpen}>
          <Padding>
            <Head>
              <div style={{ flex: 1 }}>CART</div>
              <Close onClick={this.props.onClose}>CLOSE</Close>
            </Head>
            <Promotion>
              FREE SHIPPING ON ALL ORDER WITH 1,500 BAHT OR MORE !
            </Promotion>
            <ScrollItem>
              <ScrollItemContent>
                {this.state.cartItemList.map((item, index) => (
                  <CartItem {...item} cartIndex={index} />
                ))}
              </ScrollItemContent>
            </ScrollItem>
          </Padding>
          <Checkout>
            <Price>
              <SubTotal>
                SUB TOTAL ({this.state.cartItemList.length.toLocaleString()}{' '}
                ITEMS)
              </SubTotal>
              <SumPrice>
                {this.state.cartItemList
                  .reduce((acc, cur) => acc + cur.price, 0)
                  .toLocaleString()}
                &nbsp;Baht
              </SumPrice>
            </Price>
            <button className="btn btn-light btn-block rounded-0">
              CHECK OUT
            </button>
          </Checkout>
        </Container>
      </div>
    )
  }
}

export default Cart
