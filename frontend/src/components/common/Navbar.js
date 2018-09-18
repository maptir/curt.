import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo/logowhite.png'

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  background: initial;
  padding: 0 1em;
`

const Logo = styled.img`
  height: 40px;
`

class Navbar extends React.PureComponent {
  render() {
    return (
      <Container>
        <Logo src={logo} alt="curt." />
      </Container>
    )
  }
}

export default Navbar
