/* global DrawingBoard */
/* global fabric */

import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo/logoblack.png'

class Custom extends React.Component {
  state = {}

  componentDidMount = () => {
    // var customBoard = new DrawingBoard.Board('custom', {
    //   controls: [
    //     'Color',
    //     { DrawingMode: { filler: false } },
    //     'Size',
    //     'Navigation',
    //     'Download',
    //   ],

    //   webStorage: false,
    // })
    var canvas = new fabric.Canvas('custom', {
      backgroundColor: 'rgb(100,100,200)',
    })
    fabric.Image.fromURL(Logo, img => canvas.add(img))
  }
  capture = () => {
    console.log(document.querySelector('.drawing-board-canvas').toDataURL())
  }
  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <button onClick={this.capture}>download</button>
        <canvas id="custom" width="500" height="500" />
      </div>
    )
  }
}

export default Custom
