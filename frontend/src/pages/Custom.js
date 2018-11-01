/* global DrawingBoard */

import React from 'react'
import styled from 'styled-components'

const CustomBoard = styled.div`
  height: 500px;
  width: 700px;
`

class Custom extends React.Component {
  state = {}

  componentDidMount = () => {
    var customBoard = new DrawingBoard.Board('custom', {
      controls: [
        'Color',
        { DrawingMode: { filler: false } },
        'Size',
        'Navigation',
        'Download',
      ],

      webStorage: false,
    })
  }
  capture = () => {
    console.log(document.querySelector('.drawing-board-canvas').toDataURL())
  }
  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <button onClick={this.capture}>download</button>
        <CustomBoard id="custom" />
      </div>
    )
  }
}

export default Custom
