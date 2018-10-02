import React from 'react'
import styled from 'styled-components'
import ShoesDetail from '../product-detail/ShoesDetail'
import ProductImage from '../product-detail/ProductImage'
import ProductSlider from '../common/ProductSlider'

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
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <DetailContainer className="container-fluid">
        <Container className="row">
          <div className="col-12 col-md-6">
            <ProductImage />
          </div>
          <div className="col-12 col-md-6">
            <ShoesDetail />
          </div>
        </Container>
        <ProductSliderContainer>
          <ProductSlider title="Related Products" />
        </ProductSliderContainer>
      </DetailContainer>
    )
  }
}

export default Detail
