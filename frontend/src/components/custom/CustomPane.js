/* global fabric */

import React from 'react'
import styled from 'styled-components'

class CustomPane extends React.Component {
  state = {
    dataURL: '',
    _clipboard: '',
  }

  componentDidMount = () => {}

  componentWillUnmount = () => {}

  clear = () => {
    const canvas = document.getElementById('custom').fabric
    canvas.remove(...canvas.getObjects().concat())
    canvas.discardActiveObject()
  }

  upload = event => {
    const canvas = document.getElementById('custom').fabric
    var reader = new FileReader()
    reader.onload = function(event) {
      var imgObj = new Image(100, 100)
      imgObj.src = event.target.result
      console.log(imgObj)
      imgObj.onload = function() {
        var image = new fabric.Image(imgObj)
        image.set({
          angle: 0,
          padding: 10,
          cornersize: 10,
        })
        canvas.centerObject(image)
        canvas.add(image)
        canvas.renderAll()
      }
    }
    reader.readAsDataURL(event.target.files[0])
  }

  render() {
    return (
      <div>
        <button id="drawing-mode" className="btn btn-info">
          Cancel drawing mode
        </button>
        <br />
        <button className="btn btn-info" onClick={this.clear}>
          Clear
        </button>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={this.upload}
        />
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
          <span className="info">0</span>
          <input type="range" min="0" max="150" id="drawing-line-width" />
          <br />

          <label>Line color:</label>
          <input type="color" id="drawing-color" />
          <br />

          <label>Shadow color:</label>
          <input type="color" id="drawing-shadow-color" />
          <br />

          <label>Shadow width:</label>
          <span className="info">0</span>
          <input type="range" min="0" max="50" id="drawing-shadow-width" />
          <br />

          <label>Shadow offset:</label>
          <span className="info">0</span>
          <input type="range" min="0" max="50" id="drawing-shadow-offset" />
          <br />
        </div>
      </div>
    )
  }
}

export default CustomPane
