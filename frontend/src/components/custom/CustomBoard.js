/*global fabric */

import React, { Fragment } from 'react'
import styled from 'styled-components'

import CustomPane from './CustomPane'
import Limit from '../common/Limit'
import curtApi from '../../lib/curtApi'
import fabricLib from '../../lib/fabric'
import mock from '../../assets/shoe-info/mock1.jpg'

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
  grid-template-columns: 1fr 7fr 1fr;
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
    products: [],
  }

  fetchProduct = async () => {
    const products = await curtApi.products.fetchProduct(
      this.props.match.params.slug,
    )
    this.setState({ products }, () => console.log(this.state.products))
  }

  componentDidMount = async () => {
    await this.fetchProduct()
    fabricLib.drawing()
    this.setBackgroundImage(0)
  }

  setBackgroundImage = index => {
    const canvas = document.getElementById('custom').fabric
    canvas.setBackgroundImage(
      this.state.products[0].thumbnails[index],
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
    const product = this.state.products[0]

    return (
      <Fragment>
        {product && (
          <Fragment>
            <Header>
              <div style={{ flex: '1' }}>
                <div>Customized Shoes</div>
                <Text>
                  {(product.brand + ' ' + product.name).toUpperCase()}
                </Text>
              </div>
              <button className="btn btn-dark rounded-0">
                FINALIZE YOUR DESIGN
              </button>
            </Header>
            <Background>
              <Container>
                <CustomPane />
                <Canvas id="custom" width="500" height="500" />
                <Grid>
                  {product.thumbnails.map((thumbnail, index) => (
                    <Thumbnail
                      key={index}
                      imageUrl={thumbnail}
                      onClick={() => this.changeSide(index)}
                    />
                  ))}
                </Grid>
              </Container>
            </Background>
          </Fragment>
        )}
      </Fragment>
    )
  }
}

export default CustomBoard
