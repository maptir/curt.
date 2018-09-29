import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import fb from '../../assets/icon/facebook-logo.png'
import tw from '../../assets/icon/twitter-logo2.png'
import yt from '../../assets/icon/youtube-logo.png'
import ig from '../../assets/icon/instagram-logo2.png'

const Container = styled.div`
  display: flex;
  background: #2f2f2f;
  padding: 2em;
  padding-bottom: 80px;
  color: white;
  > * + * {
    margin-left: 2em;
  }
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const Anchors = styled.div`
  flex: 1;
  a {
    font-size: 12px;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: #bbb;
  }
`

const Contact = styled.div`
  text-align: right;
  font-weight: 200;
  font-size: 18px;
`

const Social = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;
  margin-bottom: 2em;
  > a > img {
    width: 30px;
    height: 30px;
  }
`

const DemoComponent = props => {
  return (
    <Container>
      <div>
        <Title>CURT.</Title>
      </div>
      <Anchors>
        <Title>SUPPORT</Title>
        <div>
          <StyledLink to="/status">RETAIL STATUS</StyledLink>
        </div>
        <div>
          <StyledLink to="/contact">CONTACT</StyledLink>
        </div>
        <div>
          <StyledLink to="/refund">REFUND</StyledLink>
        </div>
        <div>
          <StyledLink to="/joinus">BE PART OF US</StyledLink>
        </div>
      </Anchors>
      <Contact>
        <Social>
          <a href="https://apple.com">
            <img src={fb} />
          </a>
          <a href="https://apple.com">
            <img src={tw} />
          </a>
          <a href="https://apple.com">
            <img src={yt} />
          </a>
          <a href="https://apple.com">
            <img src={ig} />
          </a>
        </Social>
        <Title>CONTACT US</Title>
        <div>+(66) 83 333 7312</div>
        <div>curt.store@gmail.com</div>
      </Contact>
    </Container>
  )
}

export default DemoComponent
