import React from 'react'
import styled from 'styled-components'
import Detail from '../components/product-detail/Detail'



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
      <div>
        <Detail />
      </div>
    )
  }
}

export default ProductDetail
