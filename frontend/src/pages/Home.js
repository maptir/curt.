import React from 'react'
import styled from 'styled-components'
import Header from '../components/home/Header'

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
      </div>
    )
  }
}

export default Home
