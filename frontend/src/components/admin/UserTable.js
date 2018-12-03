/* Stateful Component */
import React from 'react'
import styled from 'styled-components'
import curtApi from '../../api'

import ReactTable from 'react-table'

class UserTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: {}, selectAll: 0, data: [] }

    this.toggleRow = this.toggleRow.bind(this)
    this.renderEditable = this.renderEditable.bind(this)
  }

  toggleRow(id) {
    const newSelected = Object.assign({}, this.state.selected)
    newSelected[id] = !this.state.selected[id]
    this.setState({
      selected: newSelected,
      selectAll: 2,
    })
  }

  state = {}

  fetchUser = async () => {
    const users = await curtApi.auth.fetchAllUsers()
    this.setState({ data: users })
  }

  toggleSelectAll() {
    let newSelected = {}

    if (this.state.selectAll === 0) {
      this.state.data.forEach(x => {
        newSelected[x.id] = true
      })
    }

    this.setState({
      selected: newSelected,
      selectAll: this.state.selectAll === 0 ? 1 : 0,
    })
  }

  componentDidMount = () => {
    this.fetchUser()
  }

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
        {this.state.data && (
          <ReactTable
            data={this.state.data}
            columns={[
              {
                Header: 'IDENTICAL',
                columns: [
                  // {
                  //   id: 'checkbox',
                  //   accessor: '',
                  //   Cell: ({ original }) => {
                  //     return (
                  //       <input
                  //         type="checkbox"
                  //         className="checkbox"
                  //         checked={this.state.selected[original._id] === true}
                  //         onChange={() => this.toggleRow(original._id)}
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
                  //             input.indeterminate = this.state.selectAll === 2
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
                    Header: 'ID',
                    accessor: '_id',
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
            noDataText="NO DATA"
            filterable="true"
            defaultSorted={[{ id: 'id', desc: false }]}
            defaultPageSize={10}
            className="-striped -highlight"
            filterable="true"
          />
        )}
      </div>
    )
  }
}

export default UserTable
