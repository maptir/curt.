import React from 'react'
import styled from 'styled-components'
import RemoveItem from './RemoveItem'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0 0;
`

const Image = styled.div`
  background: url(${props => props.imageUrl});
  background-position: center center;
  background-size: cover;
  width: 60px;
  height: 60px;
`

const BoldText = styled.div`
  font-weight: 900;
`

const MiniText = styled.div`
  color: grey;
  font-size: 10px;
`

const Detail = styled.div`
  flex: 1;
  margin: 1em;
  text-align: left;
`

const Price = styled.div`
  text-align: right;
  margin: 1em;
`

const RemoveButton = styled.div`
  cursor: pointer;
  color: grey;
  font-size: 10px;
`

class CartItem extends React.Component {
  state = {
    removeClicked: false,
  }

  toggleShow = () => {
    this.setState({ removeClicked: !this.state.removeClicked })
  }

  render() {
    return (
      <div>
        <Container>
          <Image imageUrl={this.props.imageUrl} />
          <Detail>
            <BoldText>{this.props.name}</BoldText>
            <MiniText>Size: {this.props.size}</MiniText>
          </Detail>
          <Price>
            <BoldText>{this.props.price.toLocaleString()} Baht</BoldText>
            <RemoveButton onClick={this.toggleShow}>REMOVE</RemoveButton>
          </Price>
        </Container>
        <RemoveItem
          productId={this.props.id}
          clicked={this.state.removeClicked}
        />
      </div>
    )
  }
}

export default CartItem
