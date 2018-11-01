import React from 'react'
import styled from 'styled-components'
import ShoesDetail from '../product-detail/ShoesDetail'
import ProductImage from '../product-detail/ProductImage'
import ProductSlider from '../common/ProductSlider'
import { withRouter } from 'react-router-dom'
import curtApi from '../../lib/curtApi'

import mock1 from '../../assets/shoe-info/mock1.jpg'
import mock2 from '../../assets/shoe-info/mock2.jpg'
import mock3 from '../../assets/shoe-info/mock3.jpg'
import mock4 from '../../assets/shoe-info/mock4.jpg'
import mock5 from '../../assets/shoe-info/mock5.jpg'
import mock6 from '../../assets/shoe-info/mock6.jpg'
import mock7 from '../../assets/shoe-info/mock7.jpg'
import mock8 from '../../assets/shoe-info/mock8.jpg'

const imageList = [mock1, mock2, mock3, mock4, mock5, mock6, mock7]

const DetailContainer = styled.div`
  margin: 1em;
  margin-top: 30px;
`

const ProductSliderContainer = styled.div`
  margin-bottom: 4em;
`

const Container = styled.div`
  margin-bottom: 1em;
`

class Detail extends React.Component {
  state = {
    products: [],
  }

  fetchProduct = async () => {
    const products = await curtApi.products.fetchProduct(
      this.props.match.params.slug,
    )
    this.setState({ products })
  }

  componentDidMount = () => {
    this.fetchProduct()
  }

  componentDidUpdate = prevProps => {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.fetchProduct()
    }
  }

  render() {
    return (
      this.state.products.length > 0 && (
        <DetailContainer className="container-fluid">
          <Container className="row">
            <div className="col-12 col-md-6">
              <ProductImage
                images={[this.state.products[0].imageUrl, ...imageList]}
              />
            </div>
            <div className="col-12 col-md-6">
              <ShoesDetail products={this.state.products} />
            </div>
          </Container>
          <ProductSliderContainer>
            <ProductSlider title="Related Products" />
          </ProductSliderContainer>
        </DetailContainer>
      )
    )
  }
}

export default withRouter(Detail)
