/* Stateful Component */
import React from 'react'
import styled from 'styled-components'

import ReactTable from 'react-table'
import checkboxHOC from 'react-table/lib/hoc/selectTable'

const CheckboxTable = checkboxHOC(ReactTable)

function getColumns(data) {
  const columns = []
  const sample = data[0]
  Object.keys(sample).forEach(key => {
    if (key !== '_id') {
      columns.push({
        accessor: key,
        Header: key,
      })
    }
  })
  return columns
}

const newPerson = [
  {
    id: Math.floor(Math.random() * 100),
    firstName: 'Mock',
    lastName: 'Mock',
    email: 'curt@curt.com',
    password: '123456',
  },
  {
    id: Math.floor(Math.random() * 100),
    firstName: 'Mock',
    lastName: 'Mock',
    email: 'curt@curt.com',
    password: '123456',
  },
  {
    id: Math.floor(Math.random() * 100),
    firstName: 'Mock',
    lastName: 'Mock',
    email: 'curt@curt.com',
    password: '123456',
  },
  {
    id: Math.floor(Math.random() * 100),
    firstName: 'Mock',
    lastName: 'Mock',
    email: 'curt@curt.com',
    password: '123456',
  },
]

const Bottom = styled.div`
  text-align: center;
  padding: 1em;
`
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

class UserTable extends React.Component {
  constructor() {
    super()
    this.renderEditable = this.renderEditable.bind(this)
    const data = newPerson
    const columns = getColumns(data)
    this.state = {
      data,
      columns,
      selection: [],
      selectAll: false,
    }
  }

  toggleSelection = (key, shift, row) => {
    let selection = [...this.state.selection]
    const keyIndex = selection.indexOf(key)
    if (keyIndex >= 0) {
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1),
      ]
    } else {
      selection.push(key)
    }
    this.setState({ selection })
  }

  toggleAll = () => {
    const selectAll = this.state.selectAll ? false : true
    const selection = []
    if (selectAll) {
      const wrappedInstance = this.checkboxTable.getWrappedInstance()
      const currentRecords = wrappedInstance.getResolvedState().sortedData
      currentRecords.forEach(item => {
        selection.push(item._original._id)
      })
    }
    this.setState({ selectAll, selection })
  }

  isSelected = key => {
    return this.state.selection.includes(key)
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
    const { toggleSelection, toggleAll, isSelected, logSelection } = this
    const { data, columns, selectAll } = this.state

    const checkboxProps = {
      selectAll,
      isSelected,
      toggleSelection,
      toggleAll,
      selectType: 'checkbox',
      getTrProps: (s, r) => {
        const selected = this.isSelected(r)
        console.log(r);
        
        return {
          style: {
            backgroundColor: selected ? 'lightgreen' : 'inherit',
          },
        }
      },
    }

    return (
      <div>
        <CheckboxTable
          ref={r => (this.checkboxTable = r)}
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          {...checkboxProps}
        />
        {/* <ReactTable
          data={newPerson}
          noDataText="NO DATA"
          columns={[
            {
              Header: 'IDENTICAL',
              columns: [
                {
                  Header: 'ID',
                  accessor: 'id',
                },
              ],
            },
            {
              Header: 'GENERAL INFORMATION',
              columns: [
                {
                  Header: 'First Name',
                  accessor: 'firstName',
                  Cell: this.renderEditable,
                },
                {
                  Header: 'Last Name',
                  accessor: 'lastName',
                  Cell: this.renderEditable,
                },
              ],
            },
            {
              Header: 'CONTACT INFORMATION',
              columns: [
                {
                  Header: 'Email',
                  accessor: 'email',
                  Cell: this.renderEditable,
                },
              ],
            },
            {
              Header: 'USER DATA',
              columns: [
                {
                  Header: 'Password',
                  accessor: 'password',
                  Cell: this.renderEditable,
                },
              ],
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          filterable="true"
          className="-striped -highlight"
        /> */}
        <div className="row no-gutters">
          <Bottom className="col-12">
            <BottomButton className="btn-dark">ADD PRODUCT</BottomButton>
            <BottomButton className="btn-dark">REMOVE PRODUCT</BottomButton>
            <BottomButton className="btn-dark">SAVE CHANGES</BottomButton>
          </Bottom>
        </div>
      </div>
    )
  }
}

export default UserTable
