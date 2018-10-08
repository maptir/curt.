import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import StyledLink from './StyledLink'
import Product from './Product'
import ProductProvider from '../../providers/ProductProvider'

const PaddedProduct = styled(Product)`
  padding: 1em;
`

const Title = styled.span`
  font-weight: 900;
  font-size: 24px;
  margin: 0.5em 0;
`

const Link = styled(StyledLink)`
  color: grey !important;
  float: right;
`

const Container = styled.div`
  margin-bottom: 2em;
`

class ProductSlider extends React.Component {
  componentDidMount = () => {} // fetch data here

  render() {
    const settings = {
      centerMode: true,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1500,
      swipeToSlide: true,
      arrows: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    }
    return (
      <ProductProvider>
        {({ productList }) => (
          <Container>
            <div>
              <Title>{this.props.title}</Title>
              <Link to="/catalog">View more.</Link>
            </div>
            <Slider {...settings}>
              {productList.map(product => (
                <PaddedProduct
                  title={product.name}
                  desc={product.price.toLocaleString() + ' Baht.'}
                  imageUrl={product.imageUrl}
                  key={product._id}
                />
              ))}
            </Slider>
          </Container>
        )}
      </ProductProvider>
    )
  }
}

export default ProductSlider
