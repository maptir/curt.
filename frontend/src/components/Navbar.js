import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  position: sticky;
  top: 0;
  left: 0;
  background: initial;
`

class Navbar extends React.PureComponent {
  render() {
    return (
      <Container>
        <h1>asdf</h1>
      </Container>
    )
  }
}

export default Navbar
