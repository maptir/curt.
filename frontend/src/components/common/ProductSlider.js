import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import StyledLink from './StyledLink'
import Product from './Product'
import Mock1 from '../../assets/shoes/mock1.jpg'
import Mock2 from '../../assets/shoes/mock2.jpg'
import Mock3 from '../../assets/shoes/mock3.jpg'
import Mock4 from '../../assets/shoes/mock4.jpg'

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
  state = {
    products: [
      {
        id: 1,
        imageUrl: Mock1,
        title: 'Mock1',
        desc: 'Mock1 description',
      },
      {
        id: 2,
        imageUrl: Mock2,
        title: 'Mock1',
        desc: 'Mock1 description',
      },
      {
        id: 3,
        imageUrl: Mock3,
        title: 'Mock1',
        desc: 'Mock1 description',
      },
      {
        id: 4,
        imageUrl: Mock4,
        title: 'Mock1',
        desc: 'Mock1 description',
      },
      {
        id: 1,
        imageUrl: Mock1,
        title: 'Mock1',
        desc: 'Mock1 description',
      },
      {
        id: 2,
        imageUrl: Mock2,
        title: 'Mock1',
        desc: 'Mock1 description',
      },
      {
        id: 3,
        imageUrl: Mock3,
        title: 'Mock1',
        desc: 'Mock1 description',
      },
      {
        id: 4,
        imageUrl: Mock4,
        title: 'Mock1',
        desc: 'Mock1 description',
      },
    ],
  }

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
      <Container>
        <div>
          <Title>{this.props.title}</Title>
          <Link to="/catalog">View more.</Link>
        </div>
        <Slider {...settings}>
          {this.state.products.map(product => (
            <PaddedProduct {...product} key={product.id} />
          ))}
        </Slider>
      </Container>
    )
  }
}

export default ProductSlider
