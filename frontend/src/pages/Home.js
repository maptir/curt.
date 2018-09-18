import React from 'react'
import styled from 'styled-components'

class Home extends React.Component {
  state = {
    msg: 'Home'
  }

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <h1>
          <i className="fa fa-home" aria-hidden="true"></i> { this.state.msg }
        </h1>
      </div>
    )
  }
}

export default Home
