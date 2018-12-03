/* global fabric */

import React from 'react'
import styled from 'styled-components'

import BrushIconPressed from '../../assets/icon/brush-pressed.png'
import BrushIcon from '../../assets/icon/brush.png'
import StampIcon from '../../assets/icon/stamp.png'
import ClearIcon from '../../assets/icon/clear.png'
import DeleteIcon from '../../assets/icon/delete.png'

import BrushLogo from '../../assets/icon/brush-icon.png'

import { SketchPicker } from 'react-color'

const Toolbar = styled.div`
  max-height: 45px;
  width: fit-content;
  background-color: #313131;
`
const Option = styled.div`
  height: auto;
  width: fit-content;
  background-color: #313131;
  color: white;
  padding: ${props => (props.toggle ? '15px' : '0px')};
  display: ${props => (props.toggle ? '' : 'none')};
`

class CustomPane extends React.Component {
  state = {
    dataURL: '',
    toggle: true,
    fileUpload: []
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
    }
    reader.readAsDataURL(event.target.files[0])
    this.setState({fileUpload: []})
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

  toggleDrawingMode = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    return (
      <div>
        <Toolbar>
          <button
            id="drawing-mode"
            style={{ padding: '0px', margin: '0px' }}
            onClick={this.toggleDrawingMode}
          >
            <img
              src={this.state.toggle ? BrushIconPressed : BrushIcon}
              style={{ maxHeight: '45px', width: 'auto' }}
            />
          </button>
          <label>
            <img src={StampIcon} style={{ maxHeight: '45px', width: 'auto' }} />
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={this.upload}
              value={this.state.fileUpload}
              style={{ display: 'none' }}
            />
          </label>
          <button
            style={{ padding: '0px', margin: '0px' }}
            onClick={this.delete}
          >
            <img
              src={DeleteIcon}
              style={{ maxHeight: '45px', width: 'auto' }}
            />
          </button>
          <button
            style={{ padding: '0px', margin: '0px' }}
            onClick={this.clear}
          >
            <img src={ClearIcon} style={{ maxHeight: '45px', width: 'auto' }} />
          </button>
        </Toolbar>

        <Option toggle={this.state.toggle}>
          <div id="drawing-mode-options">
            <img
              src={BrushLogo}
              alt=""
              style={{ maxHeight: '21px', width: 'auto', marginRight: '10px' }}
            />
            <select id="drawing-mode-selector">
              <option>Pencil</option>
              <option>Circle</option>
              <option>Spray</option>
            </select>
            <br />

            <label>Line width : </label>
            <span className="info"> 0 </span>
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
        </Option>
      </div>
    )
  }
}

export default CustomPane
