/*global fabric */

import { connect } from 'react-redux'
import React, { Fragment } from 'react'
import styled from 'styled-components'

import * as productActions from '../../redux/modules/product'
import curtApi from '../../lib/curtApi'
import CustomPane from './CustomPane'
import fabricLib from '../../lib/fabric'
import firebase from '../../lib/firebase'
import Limit from '../common/Limit'
import Spinner from '../common/Loading'

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
    newName: '',
    uploading: false,
  }

  fetchProduct = async () => {
    const products = await curtApi.products.fetchProduct(
      this.props.match.params.slug,
    )
    this.setState({ products, newName: products[0].name })
  }

  componentDidMount = async () => {
    await this.fetchProduct()
    fabricLib.drawing()
    this.setBackgroundImage(0)
  }

  setBackgroundImage = (index, onFinish = () => {}) => {
    const canvas = document.getElementById('custom').fabric
    canvas.setBackgroundImage(
      this.state.products[0].thumbnails[index],
      () => {
        canvas.backgroundImage.scaleToWidth(400)
        canvas.backgroundImage.scaleToHeight(500)
        canvas.renderAll()
        onFinish()
      },
      {
        top: canvas.getCenter().top,
        left: canvas.getCenter().left,
        originX: 'center',
        originY: 'center',
      },
    )
  }

  changeSide = (index, callback = () => {}) => {
    console.log(index)

    this.setBackgroundImage(index, () => {
      console.log('setBG callback' + index)

      this.save(this.state.currentSide, () => {
        this.setState({ currentSide: index })
        this.load(index, callback)
      })
    })
  }

  save = (index, callback) => {
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
      canvas.remove(...canvas.getObjects().concat())
      canvas.discardActiveObject()
      callback()
    })
  }

  load = (index, callback = () => {}) => {
    const canvas = document.getElementById('custom').fabric
    this.state['side' + index]
      ? this.state['side' + index].clone(clonedObj => {
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
          console.log('load' + index)
          callback()
        })
      : callback()
  }

  upload = () => {
    const { thumbnails } = this.state.products[0]
    const canvas = document.getElementById('custom').fabric
    const randomKey = firebase
      .database()
      .ref()
      .push().key
    let i = 0,
      j = 0
    let dataURLs = []
    const timer = setInterval(() => {
      this.changeSide(i++, async () => {
        this.setState({ uploading: true })
        console.log('Start callback changeside')
        const index = i
        const dataUrl = canvas.toDataURL('image/png')
        const filename = `${randomKey}-${index}.png`
        console.log(dataUrl)
        await firebase
          .storage()
          .ref(filename)
          .putString(dataUrl, 'data_url')
        console.log('uploaded')
        const url = await firebase
          .storage()
          .ref(filename)
          .getDownloadURL()

        console.log(url)
        dataURLs[index - 1] = url
        j++
        if (j >= thumbnails.length) {
          this.setState({ uploading: false })
          this.props.addProduct({
            ...this.state.products[0],
            name: this.state.newName,
            slug:
              this.state.newName.toLowerCase() +
              '-' +
              this.state.products[0].gender,
            thumbnails: dataURLs,
          })
        }
      })
      if (i >= thumbnails.length) {
        clearInterval(timer)
        console.log(dataURLs)
      }
    }, 500)
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
                  <input
                    type="text"
                    onChange={e => this.setState({ newName: e.target.value })}
                    value={this.state.newName}
                  />
                </Text>
              </div>
              <button className="btn btn-dark rounded-0" onClick={this.upload}>
                FINALIZE YOUR DESIGN
              </button>
            </Header>
            <Background>
              <Spinner
                isOpen={this.state.uploading}
                text={<div>ควยๆๆๆๆ</div>}
              />
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

const mapStateToProps = state => ({ ...state.product })

const mapDispatchToProps = { ...productActions }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomBoard)
