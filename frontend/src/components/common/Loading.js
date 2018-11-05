import React from 'react'
import styled from 'styled-components'
import spinner from '../../assets/spinner.svg'

const Full = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
`

const Container = styled.div`
  padding: 1em;
  margin: 1em;
  border: thin solid gray;
  background: white;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
`

const Text = styled.h3`
  margin: 0;
`

// const Loader = styled.img.attrs({
//   src: spinner,
// })`
//   padding: 0 1em;
//   width: 80%;
// `

export default props => <h1>hi</h1>
// props.isOpen ? (
//   <Full isOpen={props.isOpen}>
//     <Container>
//       <img src={spinner} alt="spinner" />
//       <Text>{props.text}</Text>
//     </Container>
//   </Full>
// ) : null
