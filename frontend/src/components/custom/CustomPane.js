/* global fabric */

import React from 'react'
class CustomPane extends React.Component {
  state = {
    dataURL: '',
  }
  delete = () => {
    const canvas = document.getElementById('custom').fabric
    canvas.remove(...canvas.getActiveObjects().concat())
    canvas.discardActiveObject()
  }

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
      setTimeout(() => console.log(canvas.toDataURL('image/png')), 1000)
    }
    reader.readAsDataURL(event.target.files[0])
  }

  save = () => {
    const canvas = document.getElementById('custom')
    const dataURL = canvas.toDataURL('image/jpg')
    this.setState({
      dataURL,
    })
  }

  load = () => {
    const canvas = document.getElementById('custom').fabric
    var img = new Image()
    img.onload = function() {
      const fimg = new fabric.Image(img)
      canvas.setBackgroundImage(fimg) // Or at whatever offset you like
      canvas.renderAll()
    }
    img.src = this.state.dataURL
  }

  render() {
    return (
      <div>
        <button id="drawing-mode" className="btn btn-info">
          Cancel drawing mode
        </button>
        <br />
        <button className="btn btn-info" onClick={this.delete}>
          Delete
        </button>
        <button className="btn btn-info" onClick={this.clear}>
          Clear
        </button>
        <button className="btn btn-info" onClick={this.save}>
          Save
        </button>
        <button className="btn btn-info" onClick={this.load}>
          Load
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
