/* Stateful Component */
import React from 'react'
import styled from 'styled-components'
import curtApi from '../../lib/curtApi'

import ReactTable from 'react-table'
import ProductProvider from '../../providers/ProductProvider'

const InsideButton = styled.button`
  height: 40px !important;
  border-radius: 10px !important;
  padding-left: 15px !important;
  padding-right: 15px !important;
  font-size: 14px !important;
  font-weight: 300 !important;
  margin: 10px;
  margin-top: 0px;
  margin-button: 0px;
`

class Table extends React.Component {
  constructor() {
    super()
    this.renderEditable = this.renderEditable.bind(this)
  }

  state = {}

  fetchProduct = async () => {
    const products = await curtApi.products.fetchAllProduct()
    this.setState({ data: products })
  }

  componentDidMount = () => {
    this.fetchProduct()
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data]
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML
          this.setState({ data })
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id],
        }}
      />
    )
  }

  render() {
    return (
      <div>
        {this.state.data && (
          <ProductProvider>
            {({ productList }) => {
              return (
                <ReactTable
                  data={productList}
                  noDataText="NO DATA"
                  columns={[
                    {
                      Header: 'PRODUCT INFORMATION',
                      columns: [
                        {
                          Header: 'Name',
                          accessor: 'name',
                          Cell: this.renderEditable,
                        },
                        {
                          Header: 'Slug',
                          accessor: 'slug',
                          Cell: this.renderEditable,
                        },
                        {
                          Header: 'Base',
                          accessor: 'base',
                          Cell: this.renderEditable,
                        },
                        {
                          Header: 'Slug',
                          accessor: 'slug',
                          Cell: this.renderEditable,
                        },
                        {
                          Header: 'Price',
                          accessor: 'price',
                          Cell: this.renderEditable,
                        },
                        {
                          Header: 'Brand',
                          accessor: 'brand',
                          Cell: this.renderEditable,
                        },
                        {
                          Header: 'Gender',
                          accessor: 'gender',
                          Cell: this.renderEditable,
                        },
                        {
                          Header: 'Size',
                          accessor: 'size',
                          Cell: this.renderEditable,
                        },
                        {
                          Header: 'Quantity',
                          accessor: 'quantity',
                          Cell: this.renderEditable,
                        },
                      ],
                    },
                  ]}
                  defaultPageSize={10}
                  className="-striped -highlight"
                  filterable="true"
                  SubComponent={row => {
                    return (
                      <div style={{ padding: '10px', textAlign: 'center' }}>
                        * Press the button to continue your action *<br />
                        <InsideButton className="btn-dark">SAVE</InsideButton>
                        <InsideButton className="btn-dark">REMOVE</InsideButton>
                      </div>
                    )
                  }}
                  className="-striped -highlight"
                />
              )
            }}
          </ProductProvider>
        )}
      </div>
    )
  }
}

export default Table
