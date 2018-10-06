import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/catalog/Sidebar'
import Mock1 from '../assets/shoes/mock1.jpg'
import Mock2 from '../assets/shoes/mock2.jpg'
import Mock3 from '../assets/shoes/mock3.jpg'
import Mock4 from '../assets/shoes/mock4.jpg'
import Mock5 from '../assets/shoes/mock3.jpg'
import Mock6 from '../assets/shoes/mock2.jpg'

import Product from '../components/common/Product'

const Container = styled.div`
  padding: 2em;
  padding-right: 0;
`
const CatalogContainer = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  padding: 2em;
`
const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  grid-row-gap: 0.5em;
  margin-top: 0.5em;
`

const productMockList = [
  {
    imageUrl: Mock1,
    title: "Mock1",
    desc: "1,900 Baht"
  },
  {
    imageUrl: Mock2,
    title: "Mock2",
    desc: "3,900 Baht"
  },
  {
    imageUrl: Mock3,
    title: "Mock3",
    desc: "6,900 Baht"
  },
  {
    imageUrl: Mock4,
    title: "Mock4",
    desc: "7,900 Baht"
  },
  {
    imageUrl: Mock5,
    title: "Mock5",
    desc: "11,900 Baht"
  },
  {
    imageUrl: Mock6,
    title: "Mock6",
    desc: "21,900 Baht"
  },
]

class Catalog extends React.Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <Container>
          <div className="row no-gutters">
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10">
              <CatalogContainer>
                <CatalogGrid>
                {productMockList.map(mock => (
                  <Product
                    imageUrl= {mock.imageUrl}
                    title = {mock.title}
                    desc = {mock.desc}
                  />
                ))}
                </CatalogGrid>
              </CatalogContainer>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default Catalog
