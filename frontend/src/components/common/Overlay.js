import styled from 'styled-components'

export default styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: all 300ms;
`
