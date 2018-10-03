import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/catalog/Sidebar'
import Mock from '../assets/shoes/mock1.jpg'
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
  grid-gap: 0;
  grid-row-gap: 0.5em;
  margin-top: 0.5em;
`

class Catalog extends React.Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <Container>
          <div className="row">
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10">
              <CatalogContainer>
                <CatalogGrid>
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />

                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />

                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />

                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />

                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />

                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />

                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  <Product
                    imageUrl={Mock}
                    title="Converse Basic"
                    desc="1,900 Baht"
                  />
                  
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
