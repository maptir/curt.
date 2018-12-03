import React, { Fragment } from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logo/logoblack.png'
import OrderProvider from '../../providers/OrderProvider'
import OrderItem from './OrderItem'
import Overlay from '../common/Overlay'
import Sidebar from '../common/Sidebar'

const Padding = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 0;
`

const Head = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  text-align: right;

  > img {
    width: 93px;
    height: 27px;
  }

  > div {
    flex: 1;
    cursor: pointer;
  }
`

const HeadPurchase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2f2f2f;
  color: white;
  font-weight: bold;
  padding: 1em;
`

const ScrollItem = styled.div`
  flex: 1;
  overflow-y: auto;
  :hover,
  :focus {
    visibility: visible;
  }
`

class User extends React.Component {
  render() {
    console.log(this.props)

    return (
      <OrderProvider>
        {({ orderList }) => (
          <Fragment>
            <Overlay isOpen={this.props.isOpen} onClick={this.props.onClose} />
            <Sidebar isOpen={this.props.isOpen}>
              <Padding>
                <Head>
                  <img src={Logo} />
                  <div onClick={this.props.onClose}>CLOSE</div>
                </Head>
              </Padding>
              <HeadPurchase>PURCHASED HISTORY</HeadPurchase>
              <ScrollItem>
                {orderList.map(order => (
                  <OrderItem key={order.id} order={order} />
                ))}
              </ScrollItem>
            </Sidebar>
          </Fragment>
        )}
      </OrderProvider>
    )
  }
}

export default User
