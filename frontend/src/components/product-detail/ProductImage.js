/* Stateful Component */
import React from 'react'
import styled from 'styled-components'

const FullImage = styled.div`
  background: url(${props => props.imageUrl}) center center / cover no-repeat;
  grid-area: b;
`

const Thumbnail = styled.div`
  cursor: pointer;
  background: url(${props => props.imageUrl}) center center / cover no-repeat;
  grid-area: ${props => `a${props.position}`};
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
          {this.props.images.map((image, index) => (
            <Thumbnail
              key={index}
              position={index + 1}
              imageUrl={image}
              onClick={() =>
                this.setState({
                  current: index,
                })
              }
            />
          ))}
          <FullImage imageUrl={this.props.images[this.state.current]} />
        </Grid>
      </Container>
    )
  }
}

export default ProductImage
