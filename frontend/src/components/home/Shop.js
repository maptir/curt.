import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import casual from '../../assets/home/casual.jpg'
import formal from '../../assets/home/formal.jpg'

const Container = styled.div`
  display: flex;

  > * {
    flex: 1;
  }

  @media (max-width: 780px) {
    flex-direction: column;
  }
`

const Item = styled.div`
  position: relative;
  width: 100%;
  padding-top: 40%;
  background: url(${props => props.src}) center center / cover no-repeat;

  @media (max-width: 780px) {
    padding-top: 80%;
  }
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
  line-height: 1.2em;

  @media (max-width: 780px) {
    font-size: 52px;
  }
`

const Button = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: white !important;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.35em 2em;
  transition: all 300ms;
  cursor: pointer;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  :hover {
    background: rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 780px) {
    font-size: 20px;
  }
`

const Shop = props => {
  return (
    <Container>
      <Item src={casual}>
        <Center>
          <div>
            <div>CASUAL</div>
            <Button to="/men">SHOP NOW</Button>
          </div>
        </Center>
      </Item>
      <Item src={formal}>
        <Center>
          <div>
            <div>FORMAL</div>
            <Button to="/men">SHOP NOW</Button>
          </div>
        </Center>
      </Item>
    </Container>
  )
}

export default Shop
