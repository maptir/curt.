import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 400px;
  height: 100vh;
  top: 0;
  right: -400px;
  background-color: white;
  color: black;
  z-index: 99999;
  box-shadow: ${props =>
    props.isOpen ? '0 -4px 5px rgba(0, 0, 0, 0.6);' : 'none'};
  transition: all 300ms;
  transform: ${props =>
    !props.isOpen ? 'translate3d(0)' : 'translate3d(-400px, 0 ,0 )'};
  @media (max-width: 480px) {
    width: 90vw;
  }
`
