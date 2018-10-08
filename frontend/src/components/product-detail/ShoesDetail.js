import React from 'react'
import styled from 'styled-components'
import LoveIcon from '../../assets/icon/favourite.png'
import CartProvider from '../../providers/CartProvider'
import Protected from '../common/Protected'

const SneakerType = styled.text`
  font-size: 18px;
  font-weight: 300;
`
const SneakerName = styled.text`
  font-size: 30px;
  font-weight: 700;
`
const SneakerPrice = styled.text`
  font-size: 24px;
  font-weight: 300;
`

const SneakerHeaderDetail = styled.div`
  margin-bottom: 10px;
`

const Size = styled.text`
  font-size: 18px;
  font-weight: 300;
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
const AddButton = styled.button`
  flex: 1;
  height: 47px !important;
  border-radius: 0px !important;
  ${'' /* padding-top: 10px !important;
  padding-bottom: 10px !important; */} font-size: 18px !important;
  font-weight: 700 !important;
  width: 100% !important;
`

const LoveButton = styled.button`
  height: 100%;
  padding: 0 2em;
  border-radius: 0px !important;
  width: 100% !important;

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

const sizeList = [
  6,
  6.5,
  7,
  7.5,
  8,
  8.5,
  9,
  9.5,
  10,
  10.5,
  11,
  11.5,
  12,
  13,
  14,
  15,
]

class ShoesDetail extends React.Component {
  state = {
    size: this.props.products[0].size,
  }

  render() {
    return (
      <div>
        <SneakerHeaderDetail>
          <div>
            <SneakerType>Men's Sneaker</SneakerType>
          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <div className="">
              <SneakerName>{this.props.products[0].name}</SneakerName>
            </div>
            <div className="">
              <SneakerPrice>
                {this.props.products[0].price.toLocaleString()} Baht
              </SneakerPrice>
            </div>
          </div>
        </SneakerHeaderDetail>
        <SizeSelection>
          <div className="row" style={{ marginBottom: '10px' }}>
            <div className="col-12">
              <Size>Select Size</Size>
            </div>
          </div>
          <SizeGrid>
            {this.props.products.map(product => product.size).map(size => (
              <SizeButton
                onClick={() => this.setState({ size })}
                className={`btn ${
                  this.props.products[0].size === size ? 'btn-dark' : 'btn-outline-dark'
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
                    <AddButton
                      onClick={() => {
                        editCartItem(
                          this.props.products.find(
                            item => item.size === this.props.products[0].size,
                          )._id,
                          1,
                        )
                        openCart()
                        setTimeout(closeCart, 1000)
                      }}
                      className="btn btn-dark"
                    >
                      ADD TO CART
                    </AddButton>
                  </Protected>
                )}
              </CartProvider>
            </div>
            <div>
              <LoveButton className="btn-dark">
                <img src={LoveIcon} className="img-fluid" width="20px" alt="" />
              </LoveButton>
            </div>
          </div>
        </SizeSelection>

        <Description>
          The Converse Jack Purcell Low Profile reinvents an icon with an
          ultra-low profile and a versatile, laces-optional design.
        </Description>
      </div>
    )
  }
}

export default ShoesDetail
