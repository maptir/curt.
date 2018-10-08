import React from 'react'
import styled from 'styled-components'
import Product from '../common/Product'
import ProductProvider from '../providers/ProductProvider'

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

const ProductList = () => (
  <ProductProvider>
    {({ productList }) => (
      <CatalogContainer>
        <CatalogGrid>
          {productList.map(product => (
            <Product
              key={product._id}
              to={'/product/' + product.slug}
              imageUrl={product.imageUrl}
              title={product.name}
              desc={product.price + ' Baht'}
            />
          ))}
        </CatalogGrid>
      </CatalogContainer>
    )}
  </ProductProvider>
)

export default ProductList
