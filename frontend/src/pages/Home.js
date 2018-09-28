import React from 'react'
import styled from 'styled-components'
import Header from '../components/home/Header'
import News from '../components/home/News'

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
        <News />
      </div>
    )
  }
}

export default Home
