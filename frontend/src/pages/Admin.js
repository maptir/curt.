import React from 'react'
import styled from 'styled-components'
import ReactTable from 'react-table'

import UserTable from '../components/admin/UserTable'
import ProductTable from '../components/admin/ProductTable'

const SideBar = styled.div`
  max-width: 100%;
  padding: 1em 2em;
  text-align: center;
  background-color: ${props => (props.clicked ? '#415461' : 'white')};
  color: ${props => (props.clicked ? 'white' : 'black')};
  font-weight: 700;
`
const sideBarOption = ['USER', 'PRODUCT']

class Admin extends React.Component {
  state = {
    current: 'USER',
  }

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  setPane = option => {
    this.setState({ current: option })
  }

  tableState = () => {
    switch (this.state.current) {
      case 'USER':
        return <UserTable />
      case 'PRODUCT':
        return <ProductTable />
    }
  }

  render() {
    return (
      <div className="row no-gutters">
        <div className="col-2">
          {sideBarOption.map(option => (
            <SideBar
              clicked={this.state.current === option}
              onClick={() => this.setPane(option)}
            >
              {option}
            </SideBar>
          ))}
        </div>
        <div className="col-10">{this.tableState()}</div>
      </div>
    )
  }
}

export default Admin
