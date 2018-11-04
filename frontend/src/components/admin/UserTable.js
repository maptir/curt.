/* Stateful Component */
import React from 'react'
import styled from 'styled-components'

import ReactTable from 'react-table'

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

class UserTable extends React.Component {
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

export default UserTable
