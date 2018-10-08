import React from 'react'
import styled from 'styled-components'
import CartProvider from '../../providers/CartProvider'

const Remove = styled.div`
  display: flex;
  font-size: 14px;
  overflow: hidden;
  transition: all ${props => (props.clicked ? '1s' : '300ms')};
  z-index: -9999;
  opacity: ${props => (props.clicked ? 1 : 0)};
  max-height: ${props => (props.clicked ? '100vh' : '0')};
`

const Button = styled.button`
  color: white;
  background-color: #e53935;

  :hover {
    background-color: #d32f2f;
  }
`

class RemoveRodal extends React.Component {
  render() {
    return (
      <CartProvider>
        {({ removeCartItem }) => (
          <Remove clicked={this.props.clicked}>
            Are you sure you want to remove ?
            <Button
              className="btn mr-2"
              onClick={() => removeCartItem(this.props.productId)}
            >
              Remove
            </Button>
            <button
              className="btn btn-secondary mr-2"
              onClick={this.props.toggleShow}
            >
              Cancel
            </button>
          </Remove>
        )}
      </CartProvider>
    )
  }
}

export default RemoveRodal
