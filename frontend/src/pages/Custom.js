/* global DrawingBoard */

import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo/logoblack.png'
import fabric from '../lib/fabric'
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
    fabric.drawing()
    // var canvas = new fabric.Canvas('custom', {
    //   backgroundColor: 'rgb(100,100,200)',
    // })
    // fabric.Image.fromURL(Logo, img => canvas.add(img))
  }

  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <canvas id="custom" width="500" height="500" />
        <div style={{ display: 'inline-block', marginLeft: '10px' }}>
          <button id="drawing-mode" className="btn btn-info">
            Cancel drawing mode
          </button>
          <br />
          <button id="clear-canvas" className="btn btn-info">
            Clear
          </button>
          <br />

          <div id="drawing-mode-options">
            <label>Mode:</label>
            <select id="drawing-mode-selector">
              <option>Pencil</option>
              <option>Circle</option>
              <option>Spray</option>
              <option>Pattern</option>

              <option>hline</option>
              <option>vline</option>
              <option>square</option>
              <option>diamond</option>
              <option>texture</option>
            </select>
            <br />

            <label>Line width:</label>
            <span className="info">30</span>
            <input
              type="range"
              value="30"
              min="0"
              max="150"
              id="drawing-line-width"
            />
            <br />

            <label>Line color:</label>
            <input type="color" value="#005E7A" id="drawing-color" />
            <br />

            <label>Shadow color:</label>
            <input type="color" value="#005E7A" id="drawing-shadow-color" />
            <br />

            <label>Shadow width:</label>
            <span className="info">0</span>
            <input
              type="range"
              value="0"
              min="0"
              max="50"
              id="drawing-shadow-width"
            />
            <br />

            <label>Shadow offset:</label>
            <span className="info">0</span>
            <input
              type="range"
              value="0"
              min="0"
              max="50"
              id="drawing-shadow-offset"
            />
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default Custom
