import React from 'react'
import styled from 'styled-components'
import ProductList from '../components/catalog/ProductList'
import Sidebar from '../components/catalog/Sidebar'

const Container = styled.div`
  padding: 2em;
  padding-right: 0;
`

const Grid = styled.div`
  display: flex;

  > :first-child {
    flex: 0 0 240px;
  }

  > :last-child {
    flex: 1;
  }
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
