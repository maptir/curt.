import React, { Fragment } from 'react'
import styled from 'styled-components'
import Up from '../../assets/icon/triangle_up.png'
import Down from '../../assets/icon/triangle_down.png'
import CartItem from '../common/CartItem'

const Item = styled.div`
  display: flex;
  font-size: 14px;
  overflow: hidden;
  padding: 1em;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  > div:first-child {
    flex: 1;
  }

  > img {
    width: 16px;
    height: 16px;
  }
`

const DateTime = styled.div`
  font-size: 13px;
  color: grey;
`

const OrderList = styled.div`
  padding: 0 20px 0 20px;
  overflow: hidden;
  transition: all ${props => (props.clicked ? '1s' : '300ms')};
  z-index: -9999;
  opacity: ${props => (props.clicked ? 1 : 0)};
  max-height: ${props => (props.clicked ? '100vh' : '0')};
`

class OrderItem extends React.Component {
  state = { isClicked: false }

  toggleShow = () => {
    this.setState({ isClicked: !this.state.isClicked })
  }

  getDateTime = () => {
    const date = new Date(this.props.order.dateTime)
    return (
      'DATE: ' +
      date.getDate() +
      ' ' +
      (date.getMonth() + 1) +
      ' ' +
      date.getFullYear()
    )
  }

  render() {
    const order = this.props.order
    return (
      <Fragment>
        <Item>
          <div onClick={this.toggleShow}>
            <div>ORDER: {order.id}</div>
            <DateTime>{this.getDateTime()}</DateTime>
          </div>
          <img src={this.state.isClicked ? Up : Down} />
        </Item>
        <OrderList onClick={this.toggleShow} clicked={this.state.isClicked}>
          {order.purchasedList.map(history => {
            return <CartItem key={history.product._id} {...history.product} />
          })}
        </OrderList>
      </Fragment>
    )
  }
}

export default OrderItem
