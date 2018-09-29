/* Stateful Component */
import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import mock1 from '../../assets/shoe-info/mock1.jpg'
import mock2 from '../../assets/shoe-info/mock2.jpg'
import mock3 from '../../assets/shoe-info/mock3.jpg'
import mock4 from '../../assets/shoe-info/mock4.jpg'
import mock5 from '../../assets/shoe-info/mock5.jpg'
import mock6 from '../../assets/shoe-info/mock6.jpg'
import mock7 from '../../assets/shoe-info/mock7.jpg'
import mock8 from '../../assets/shoe-info/mock8.jpg'

const imageList = [mock1, mock2, mock3, mock4, mock5, mock6, mock7, mock8]

const FullImage = styled.div`
  background: url(${props => props.imageUrl}) center center / cover no-repeat;
  grid-area: b;
`

const Thumbnail = styled.div`
  cursor: pointer;
  background: url(${props => props.imageUrl}) center center / cover no-repeat;
  grid-area: ${props => `a${props.a}`};
  transition: all 200ms;
  :hover {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
`

const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  grid-gap: 0.5em;
  display: grid;
  grid-template-areas:
    'a1 b b b b b b b'
    'a2 b b b b b b b'
    'a3 b b b b b b b'
    'a4 b b b b b b b'
    'a5 b b b b b b b'
    'a6 b b b b b b b'
    'a7 b b b b b b b'
    'a8 b b b b b b b';

  @media (max-width: 780px) {
    grid-template-areas:
      'b b b b b b b b'
      'b b b b b b b b'
      'b b b b b b b b'
      'b b b b b b b b'
      'b b b b b b b b'
      'b b b b b b b b'
      'b b b b b b b b'
      'a1 a2 a3 a4 a5 a6 a7 a8';
  }
`

const Container = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  margin-bottom: 1em;
`

class ProductImage extends React.Component {
  state = {
    current: 0,
  }

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <Container>
        <Grid>
          {imageList.map((image, index) => (
            <Thumbnail
              a={index + 1}
              imageUrl={image}
              onClick={() =>
                this.setState({
                  current: index,
                })
              }
            />
          ))}
          <FullImage imageUrl={imageList[this.state.current]} />
        </Grid>
      </Container>
    )
  }
}

export default ProductImage
