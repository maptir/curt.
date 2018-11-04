import React, { Fragment } from 'react'
import styled from 'styled-components'
import LoveIcon from '../../assets/icon/favourite.png'
import CartProvider from '../../providers/CartProvider'
import Protected from '../common/Protected'

const SneakerType = styled.div`
  font-size: 18px;
  font-weight: 300;
`
const SneakerName = styled.div`
  font-size: 30px;
  font-weight: 700;
`
const SneakerPrice = styled.div`
  font-size: 24px;
  font-weight: 300;
`

const SneakerHeaderDetail = styled.div`
  margin-bottom: 10px;
`

const Size = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 0.5em;
`

const SizeSelection = styled.div`
  ${'' /* padding-right: 50px; */};
`

const SizeButton = styled.button`
  height: 40px !important;
  border-radius: 10px !important;
  padding-left: 15px !important;
  padding-right: 15px !important;
  font-size: 14px !important;
  font-weight: 300 !important;
`
const SizeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  grid-gap: 0.5em;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`
const Button = styled.button`
  flex: 1;
  height: 47px !important;
  border-radius: 0px !important;
  font-size: 18px !important;
  font-weight: 700 !important;
  width: 100% !important;
`

const LoveButton = styled.button`
  padding: 0 2em;
  border-radius: 0px !important;

  display: flex;
  justify-content: center;
  align-items: center;
`
const Description = styled.div`
  margin-top: 30px;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1.4px;
`

class ShoesDetail extends React.Component {
  state = {
    size: this.props.products[0].size,
  }

  addToCart = (editCartItem, openCart, closeCart) => {
    editCartItem(
      this.props.products.find(
        item => item.size === this.props.products[0].size,
      )._id,
      1,
    )
    openCart()
    setTimeout(closeCart, 1000)
  }

  render() {
    return (
      <Fragment>
        <SneakerHeaderDetail>
          <SneakerType>Men&apos;s Sneaker</SneakerType>
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <SneakerName>{this.props.products[0].name}</SneakerName>
            <SneakerPrice>
              {this.props.products[0].price.toLocaleString()} Baht
            </SneakerPrice>
          </div>
        </SneakerHeaderDetail>
        <SizeSelection>
          <Size>Select Size</Size>
          <SizeGrid>
            {this.props.products.map(product => product.size).map(size => (
              <SizeButton
                onClick={() => this.setState({ size })}
                className={`btn ${
                  this.state.size === size ? 'btn-dark' : 'btn-outline-dark'
                }`}
                key={size}
              >
                {size}
              </SizeButton>
            ))}
          </SizeGrid>
          <div className="d-flex" style={{ marginTop: '20px' }}>
            <div className="mr-2" style={{ flex: '1' }}>
              <CartProvider>
                {({ editCartItem, openCart, closeCart }) => (
                  <Protected>
                    <Button
                      onClick={() =>
                        this.addToCart(editCartItem, openCart, closeCart)
                      }
                      className="btn btn-dark"
                    >
                      ADD TO CART
                    </Button>
                  </Protected>
                )}
              </CartProvider>
            </div>
            <LoveButton className="btn-dark">
              <img src={LoveIcon} className="img-fluid" width="20px" alt="" />
            </LoveButton>
          </div>
          {this.props.products[0].thumbnails.length > 0 && (
            <Button
              className="btn btn-dark btn-block rounded-0 mt-2"
              onClick={() =>
                (window.location = '/custom/' + this.props.products[0].slug)
              }
            >
              CUSTOM THIS SHOES
            </Button>
          )}
        </SizeSelection>
        <Description>
          The Converse Jack Purcell Low Profile reinvents an icon with an
          ultra-low profile and a versatile, laces-optional design.
        </Description>
      </Fragment>
    )
  }
}

export default ShoesDetail
