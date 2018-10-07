import React from 'react'
import styled from 'styled-components'
import ProductList from '../components/catalog/ProductList'
import Sidebar from '../components/catalog/Sidebar'

const Container = styled.div`
  padding: 2em;
  padding-right: 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`

class Catalog extends React.Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <Container>
        <Grid>
          <Sidebar />
          <ProductList />
        </Grid>
      </Container>
    )
  }
}

export default Catalog
