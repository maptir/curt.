import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import Product from '../common/Product'

class ProductSlider extends React.Component {
  state = {
    products: [
      {
        id: 1,
        imageUrl: '',
        title: '',
        desc: '',
      },
    ],
  }

  componentDidMount = () => {} // fetch data here

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <Slider {...settings}>
        {this.state.products.map(product => (
          <Product {...product} key={product.id} />
        ))}
      </Slider>
    )
  }
}

export default ProductSlider
