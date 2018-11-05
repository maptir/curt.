import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as productActions from '../../redux/modules/product'

const Input = styled.input`
  border-color: black;
  border-width: 1.5px;
  padding: 0.5em;
  width: 100%;
  margin-bottom: 0.5em;
`
const InputDescription = styled.span`
  font-size: 15px;
  padding-top: 10px;
  margin-right: 15%;
`
const ModalButtonDiv = styled.div`
  text-align: center;
`
const TableButton = styled.button`
  margin: 0px 5px;
  background-color: #415461;
  color: white;
`
const Bottom = styled.div`
  text-align: center;
  padding: 1em;
`

class AddProduct extends React.Component {
  state = {
    name: '',
    slug: '',
    base: '',
    price: '',
    brand: '',
    imageUrl: '',
    gender: '',
    size: '',
    quantity: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  addProduct = () => {
    this.setState({
      name: '',
      slug: '',
      base: '',
      price: '',
      brand: '',
      imageUrl: '',
      gender: '',
      size: '',
      quantity: '',
    })
    this.props.addProduct(this.state)
    this.props.closeModal()
  }

  render() {
    return (
      <div>
        <Bottom>Please fill in all information</Bottom>
        <InputDescription>Name</InputDescription>
        <Input
          name="name"
          value={this.state.name}
          onChange={this.onChange}
          type="text"
        />
        <InputDescription>Slug</InputDescription>
        <Input
          name="slug"
          value={this.state.slug}
          onChange={this.onChange}
          type="text"
        />
        <InputDescription>Base</InputDescription>
        <Input
          name="base"
          value={this.state.base}
          onChange={this.onChange}
          type="text"
        />
        <InputDescription>Price</InputDescription>
        <Input
          name="price"
          value={this.state.price}
          onChange={this.onChange}
          type="number"
        />
        <InputDescription>Brand</InputDescription>
        <Input
          name="brand"
          value={this.state.brand}
          onChange={this.onChange}
          type="text"
        />
        <InputDescription>Image URL</InputDescription>
        <Input
          name="imageUrl"
          value={this.state.imageUrl}
          onChange={this.onChange}
          type="text"
        />
        <InputDescription>Gender</InputDescription>
        <Input
          name="gender"
          value={this.state.gender}
          onChange={this.onChange}
          type="text"
        />
        <InputDescription>Size</InputDescription>
        <Input
          name="size"
          value={this.state.size}
          onChange={this.onChange}
          type="number"
        />
        <InputDescription>Quantity</InputDescription>
        <Input
          name="quantity"
          value={this.state.quantity}
          onChange={this.onChange}
          type="number"
        />
        <ModalButtonDiv>
          <TableButton onClick={this.addProduct}>Add</TableButton>
          <TableButton onClick={this.cancelOnClick}>Cancel</TableButton>
        </ModalButtonDiv>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state.product })

const mapDispatchToProps = { ...productActions }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProduct)
