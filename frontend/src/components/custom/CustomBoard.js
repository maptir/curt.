/*global fabric */

import React, { Fragment } from 'react'
import styled from 'styled-components'

import CustomPane from './CustomPane'
import Limit from '../common/Limit'
import fabricLib from '../../lib/fabric'
import mock1 from '../../assets/shoe-info/mock1.jpg'
import mock2 from '../../assets/shoe-info/mock2.jpg'
import mock3 from '../../assets/shoe-info/mock3.jpg'
import mock4 from '../../assets/shoe-info/mock4.jpg'
import mock5 from '../../assets/shoe-info/mock5.jpg'
import mock6 from '../../assets/shoe-info/mock6.jpg'
import mock7 from '../../assets/shoe-info/mock7.jpg'
import mock8 from '../../assets/shoe-info/mock8.jpg'

const imageList = [mock1, mock2, mock3, mock4, mock5, mock6, mock7, mock8]

const Header = styled(Limit)`
  display: flex;
  padding: 1em;
`

const Text = styled.div`
  font-size: 20px;
  font-weight: 700;
`

const Background = styled.div`
  background-color: #ccc;
`

const Container = styled(Limit)`
  display: grid;
  grid-template-columns: 2fr 7fr 1fr;
  grid-gap: 1em;
  padding: 1em;
`

const Thumbnail = styled.div`
  cursor: pointer;
  background: url(${props => props.imageUrl}) center center / cover no-repeat;
  transition: all 200ms;
  :hover {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
`

const Canvas = styled.canvas`
  border: 1px solid black;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 0.5em;
  grid-auto-flow: row;
  grid-template-rows: repeat(auto-fill);
`

class CustomBoard extends React.Component {
  state = {
    currentSide: 0,
  }

  componentDidMount = () => {
    fabricLib.drawing()
    this.setBackgroundImage(0)
  }

  setBackgroundImage = index => {
    const canvas = document.getElementById('custom').fabric
    canvas.setBackgroundImage(
      imageList[index],
      () => {
        canvas.backgroundImage.scaleToWidth(400)
        canvas.backgroundImage.scaleToHeight(500)
        canvas.renderAll()
      },
      {
        top: canvas.getCenter().top,
        left: canvas.getCenter().left,
        originX: 'center',
        originY: 'center',
      },
    )
  }

  changeSide = index => {
    this.setBackgroundImage(index)
    this.save(this.state.currentSide)
    this.setState({ currentSide: index })
    this.load(index)
  }

  save = index => {
    const canvas = document.getElementById('custom').fabric
    // Group all objects
    canvas.discardActiveObject()
    canvas.setActiveObject(
      new fabric.ActiveSelection(canvas.getObjects(), {
        canvas: canvas,
      }),
    )
    canvas.requestRenderAll()

    // Clone all active objects
    canvas.getActiveObject().clone(cloned => {
      this.setState({
        ['side' + index]: cloned,
      })
    })
    canvas.remove(...canvas.getObjects().concat())
    canvas.discardActiveObject()
  }

  load = index => {
    const canvas = document.getElementById('custom').fabric
    this.state['side' + index] &&
      this.state['side' + index].clone(clonedObj => {
        canvas.discardActiveObject()
        if (clonedObj.type === 'activeSelection') {
          clonedObj.canvas = canvas
          clonedObj.forEachObject(function(obj) {
            canvas.add(obj)
          })
          clonedObj.setCoords()
        } else {
          canvas.add(clonedObj)
        }
        canvas.setActiveObject(clonedObj)
        canvas.discardActiveObject()
        canvas.requestRenderAll()
      })
  }

  render() {
    return (
      <Fragment>
        <Header>
          <div style={{ flex: '1' }}>
            <div>Customized Shoes</div>
            <Text>{'Converse Basic'.toUpperCase()}</Text>
          </div>
          <button className="btn btn-dark rounded-0">
            FINALIZE YOUR DESIGN
          </button>
        </Header>
        <Background>
          <Container>
            <CustomPane />
            <Canvas id="custom" width="600" height="500" />
            <Grid>
              {imageList.map((image, index) => (
                <Thumbnail
                  key={index}
                  imageUrl={image}
                  onClick={() => this.changeSide(index)}
                />
              ))}
            </Grid>
          </Container>
        </Background>
      </Fragment>
    )
  }
}

export default CustomBoard
