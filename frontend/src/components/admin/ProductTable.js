/* Stateful Component */
import React from 'react'
import styled from 'styled-components'

import ReactTable from 'react-table'

const newPerson = [
  {
    name: 'Jack Percel',
    slug: 'Mock',
    base: 'Mock',
    thumbnails: 'curt@curt.com',
    price: '4000',
    brand: 'mock',
    gender: 'male',
    size: '6',
    quantity: '6',
  },
 
]

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

  state = {
    data: newPerson,
  }

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

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
        <ReactTable
          data={newPerson}
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
                  Header: 'Thumbnails',
                  accessor: 'thumbnail',
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
      </div>
    )
  }
}

export default Table
