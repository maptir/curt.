import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 50px !important;
  padding-right: 30px !important;
  padding-left: 30px !important;
  font-size: 10px !important;
`

class News extends React.Component {
  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="text-center">
          UNIQUE IS THE NEW COOLS ! <br />
          EXPRESS YOURSELF <br />
          <Button className="btn btn-dark">CREATE YOUR OWN SHOES</Button>

          <div className="m-5 font-weight-bold">New This Week</div>
        </div>
      </div>
    )
  }
}

export default News
