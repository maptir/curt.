import React, { Component } from 'react'
import styled from 'styled-components'

import casual from '../../assets/home/casual.jpg'
import formal from '../../assets/home/formal.jpg'

const Container = styled.div`
  display: flex;

  > * {
    flex: 1;
  }
`

const Item = styled.div`
  position: relative;
  width: 50%;
  padding-top: 40%;
  background: url(${props => props.src}) center center / cover no-repeat;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 64px;
  color: white;
  font-weight: 700;
  text-align: center;
`

const Button = styled.button`
  font-size: 18px;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  padding: 1em;
`

const Shop = props => {
  return (
    <Container>
      <Item src={casual}>
        <Center>
          <div>
            <div>CASUAL</div>
            <Button>asdfa</Button>
          </div>
        </Center>
      </Item>
      <Item src={formal}>
        <Center>
          <div>
            <div>FORMAL</div>
            <Button>asdfa</Button>
          </div>
        </Center>
      </Item>
    </Container>
  )
}

export default Shop
