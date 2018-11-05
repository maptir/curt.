/* Stateful Component */
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Modal from '../common/Modal'
import AddProduct from './AddProductForm'

import ReactTable from 'react-table'
import * as productActions from '../../redux/modules/product'

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
`
const ModalButtonDiv = styled.div`
  text-align: center;
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
    this.renderEditable = this.renderEditable.bind(this)
  }

  state = {
    data: undefined,
  }

  saveRow = row => {
    this.setState({ saveModalIsOpen: true, row: row })
  }

  modalSaveOnClick = async () => {
    this.setState({ saveModalIsOpen: false })
    this.props.editProduct(this.state.row)
  }

  modalCancelOnClick = () => {
    this.setState({ saveModalIsOpen: false, deleteModalIsOpen: false })
  }

  modalDeleteOnClick = async () => {
    this.props.removeProduct(this.state.row._id)
    this.setState({
      deleteModalIsOpen: false,
    })
  }

  closeModal = () => {
    this.setState({
      addModalIsOpen: false,
    })
  }

  closeModal = () => {
    this.setState({
      saveModalIsOpen: false,
      deleteModalIsOpen: false,
      addModalIsOpen: false,
    })
  }

  deleteRow = async row => {
    this.setState({ deleteModalIsOpen: true, row: row })
  }

  componentDidMount = () => {
    this.props.fetchAllProduct()
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.props.productList]
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML
          this.setState({ data })
        }}
        dangerouslySetInnerHTML={{
          __html: this.props.productList[cellInfo.index][cellInfo.column.id],
        }}
      />
    )
  }

  render() {
    console.log(this.props.productList)
    return (
      <div>
        {this.props.productList && (
          <ReactTable
            data={this.props.productList}
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
                    Header: 'Image URL',
                    accessor: 'imageUrl',
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
                      onClick={() =>
                        this.saveRow(this.props.productList[row.index])
                      }
                    >
                      Save
                    </TableButton>
                    <TableButton
                      onClick={() =>
                        this.deleteRow(this.props.productList[row.index])
                      }
                    >
                      Delete
                    </TableButton>
                  </div>
                ),
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
            filterable="true"
          />
        )}
        <div className="row no-gutters">
          <Bottom className="col-12">
            <BottomButton
              className="btn-dark"
              onClick={() => this.setState({ addModalIsOpen: true })}
            >
              ADD PRODUCT
            </BottomButton>
          </Bottom>
        </div>
        <Modal isOpen={this.state.saveModalIsOpen} onClose={this.closeModal}>
          <Bottom>Please confirm to save changes.</Bottom>
          <ModalButtonDiv>
            <TableButton onClick={this.modalSaveOnClick}>Save</TableButton>
            <TableButton onClick={this.modalCancelOnClick}>Cancel</TableButton>
          </ModalButtonDiv>
        </Modal>
        <Modal isOpen={this.state.deleteModalIsOpen} onClose={this.closeModal}>
          <Bottom>Are you sure to delete the current row?</Bottom>
          <ModalButtonDiv>
            <TableButton onClick={this.modalDeleteOnClick}>Delete</TableButton>
            <TableButton onClick={this.modalCancelOnClick}>Cancel</TableButton>
          </ModalButtonDiv>
        </Modal>
        <Modal isOpen={this.state.addModalIsOpen} onClose={this.closeModal}>
          <AddProduct closeModal={this.closeModal} />
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state.product })

const mapDispatchToProps = { ...productActions }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table)
