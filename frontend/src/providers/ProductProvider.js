import { connect } from 'react-redux'
import * as productActions from '../redux/modules/product'

const ProductProvider = props =>
  props.children({
    productList: props.productList,
  })

const mapStateToProps = state => ({ ...state.product })

const mapDispatchToProps = { ...productActions }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductProvider)
