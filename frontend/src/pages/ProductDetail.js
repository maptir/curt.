import React from 'react'
import styled from 'styled-components'
import Detail from '../components/product-detail/Detail'

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
`

class ProductDetail extends React.Component {
  state = {
    msg: 'ProductDetail',
  }

  componentDidMount = () => {
    console.log(this.props.match.params.id)
  } // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <Container>
        <Detail />
      </Container>
    )
  }
}

export default ProductDetail
