import React from 'react'
import Detail from '../components/product-detail/Detail'
import Limit from '../components/common/Limit'
class ProductDetail extends React.Component {
  state = {
    msg: 'ProductDetail',
  }

  componentDidMount = () => {
    console.log(this.props.match.params.slug)
  } // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <Limit>
        <Detail />
      </Limit>
    )
  }
}

export default ProductDetail
