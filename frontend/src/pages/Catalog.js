import React from 'react'
import styled from 'styled-components'
import ProductList from '../components/catalog/ProductList'
import Sidebar from '../components/catalog/Sidebar'

const Container = styled.div`
  padding: 2em;
  padding-right: 0;
`

class Catalog extends React.Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <Container>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10">
              <ProductList />
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Catalog
