import React, { Fragment } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import CartItem from './CartItem'
import CartProvider from '../../providers/CartProvider'
import ProductProvider from '../../providers/ProductProvider'

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
  color: black;
  z-index: 99999;
  box-shadow: ${props =>
    props.isOpen ? '0 -4px 5px rgba(0, 0, 0, 0.6);' : 'none'};

  transition: all 300ms;
  @media (max-width: 480px) {
    width: 90vw;
  }
`

const Padding = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0px 20px;
  height: 100vh;
  min-height: 0;
`

const Head = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 50px;
  text-align: left;
`

const Promotion = styled.div`
  border: 1px solid black !important;
  text-align: center;
  padding: 20px 30px 20px 30px;
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
  font-size: 11px;
`

const SumPrice = styled.div`
  font-size: 16px;
`

class Cart extends React.Component {
  render() {
    return (
      <CartProvider>
        {({ cart }) => (
          <ProductProvider>
            {({ productList }) => {
              const cartProductDetail = _.intersectionWith(
                productList,
                cart,
                (product, cartItem) => product._id === cartItem.productId,
              )
              return (
                <Fragment>
                  <Overlay
                    isOpen={this.props.isOpen}
                    onClick={this.props.onClose}
                  />
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
                          {cartProductDetail.map((product, index) => (
                            <CartItem key={index} {...product} removable />
                          ))}
                        </ScrollItemContent>
                      </ScrollItem>
                    </Padding>
                    <Checkout>
                      <Price>
                        <SubTotal>
                          SUB TOTAL ({cartProductDetail.length.toLocaleString()}{' '}
                          ITEMS)
                        </SubTotal>
                        <SumPrice>
                          {cartProductDetail
                            .reduce((acc, cur) => acc + cur.price, 0)
                            .toLocaleString()}
                          &nbsp;Baht
                        </SumPrice>
                      </Price>
                      <button
                        className="btn btn-light btn-block rounded-0"
                        onClick={() => (window.location = '/checkout')}
                      >
                        CHECK OUT
                      </button>
                    </Checkout>
                  </Container>
                </Fragment>
              )
            }}
          </ProductProvider>
        )}
      </CartProvider>
    )
  }
}

export default Cart
