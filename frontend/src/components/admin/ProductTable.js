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

const Bottom = styled.div`
  text-align: center;
  padding: 1em;
`

const TableButton = styled.button`
  margin: 0px 5px;
  background-color: #415461;
  color: white;
  border-radius: 5px;
`

const BottomButton = styled.button`
  height: 40px !important;
  padding-left: 15px !important;
  padding-right: 15px !important;
  font-size: 14px !important;
  font-weight: 300 !important;
  margin: 10px;
  margin-top: 0px;
  margin-button: 0px;
`

class Table extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { selected: {}, selectAll: 0, data: [] }

    // this.toggleRow = this.toggleRow.bind(this)
    this.renderEditable = this.renderEditable.bind(this)
  }

  state = {}

  // toggleRow(id) {
  //   const newSelected = Object.assign({}, this.state.selected)
  //   newSelected[id] = !this.state.selected[id]
  //   this.setState({
  //     selected: newSelected,
  //     selectAll: 2,
  //   })
  // }

  // toggleSelectAll() {
  //   let newSelected = {}

  //   if (this.state.selectAll === 0) {
  //     this.state.data.forEach(x => {
  //       newSelected[x.id] = true
  //     })
  //   }

  //   this.setState({
  //     selected: newSelected,
  //     selectAll: this.state.selectAll === 0 ? 1 : 0,
  //   })
  // }

  fetchProduct = async () => {
    const products = await curtApi.products.fetchAllProduct()
    this.setState({ data: products })
  }

  checkRow = async row => {
    console.log(row)
    // const product = await curtApi.products.editProduct(row.original)
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
          console.log(this.state.data)
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
                        // {
                        //   id: 'checkbox',
                        //   accessor: '',
                        //   Cell: ({ original }) => {
                        //     return (
                        //       <input
                        //         type="checkbox"
                        //         className="checkbox"
                        //         checked={
                        //           this.state.selected[original.id] === true
                        //         }
                        //         onChange={() => this.toggleRow(original.id)}
                        //       />
                        //     )
                        //   },
                        //   Header: x => {
                        //     return (
                        //       <input
                        //         type="checkbox"
                        //         className="checkbox"
                        //         checked={this.state.selectAll === 1}
                        //         ref={input => {
                        //           if (input) {
                        //             input.indeterminate =
                        //               this.state.selectAll === 2
                        //           }
                        //         }}
                        //         onChange={() => this.toggleSelectAll()}
                        //       />
                        //     )
                        //   },
                        //   sortable: false,
                        //   width: 45,
                        // },
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
                    {
                      Header: 'EDIT',
                      Cell: row => (
                        <div style={{ textAlign: 'center' }}>
                          <TableButton
                            onClick={() => this.checkRow(row.original)}
                          >
                            Save
                          </TableButton>
                          <TableButton>Delete</TableButton>
                        </div>
                      ),
                    },
                  ]}
                  defaultPageSize={10}
                  className="-striped -highlight"
                  filterable="true"
                />
              )
            }}
          </ProductProvider>
        )}
        {/* <div className="row no-gutters">
          <Bottom className="col-12">
            <BottomButton className="btn-dark">ADD PRODUCT</BottomButton>
            <BottomButton className="btn-dark">REMOVE PRODUCT</BottomButton>
          </Bottom>
        </div> */}
      </div>
    )
  }
}

export default Table
