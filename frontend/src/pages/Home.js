import React from 'react'
import Header from '../components/home/Header'
import News from '../components/home/News'
import Shop from '../components/home/Shop'
import ProductSlider from '../components/common/ProductSlider'
import Slogan from '../components/home/Slogan'
import Limit from '../components/common/Limit'
import styled from 'styled-components'

const Container = styled(Limit)`
  padding: 1em;
`
class Home extends React.Component {
  state = {
    msg: 'Home',
  }

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <Header />
        <Container>
          <News />
        </Container>
        <Shop />
        <Container>
          <ProductSlider title="PRODUCTS" />
        </Container>
        <Slogan />
      </div>
    )
  }
}

export default Home
