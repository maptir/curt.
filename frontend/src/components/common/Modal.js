import React from 'react'
import styled from 'styled-components'
import Rodal from 'rodal'

const Modal = styled(Rodal)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const rodalStyle = {
  position: 'relative',
  maxWidth: '500px',
  width: '90%',
  height: 'auto',
  padding: '2em 1em',
}

export default props => (
  <Modal
    customStyles={rodalStyle}
    visible={props.isOpen}
    onClose={props.onClose}
  >
    {props.children}
  </Modal>
)
