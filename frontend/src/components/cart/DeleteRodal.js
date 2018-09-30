import React from 'react'
import styled from 'styled-components'
import Rodal from 'rodal'

const RemoveButton = styled.div`
  cursor: pointer;
  color: grey;
  font-size: 10px;
`

class DeleteRodal extends React.Component {
  state = {
    visible: false,
  }

  toggleShow = () => {
    this.setState({ visible: !this.state.visible })
  }

  deleteShoeFromUserCart = cartIndex => {
    // Delete product
  }

  render() {
    return (
      <div>
        <RemoveButton onClick={this.toggleShow}>REMOVE</RemoveButton>
        <Rodal visible={this.state.visible} onClose={this.toggleShow}>
          <div />
        </Rodal>
      </div>
    )
  }
}

export default DeleteRodal
