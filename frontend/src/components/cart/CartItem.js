import React from 'react'
import styled from 'styled-components'
import DeleteRodal from './DeleteRodal'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
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

const CartItem = props => {
  return (
    <Container>
      <Image imageUrl={props.imageUrl} />
      <Detail>
        <BoldText>{props.name}</BoldText>
        <MiniText>Size: {props.size}</MiniText>
      </Detail>
      <Price>
        <BoldText>{props.price.toLocaleString()} Baht</BoldText>
        <DeleteRodal productId={props.id} />
      </Price>
    </Container>
  )
}

export default CartItem
