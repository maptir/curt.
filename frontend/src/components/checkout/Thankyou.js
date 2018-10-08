import React from 'react'
import styled from 'styled-components'
import ThankyouImage from '../../assets/text/Thankyou.png'

const Container = styled.div`
  text-align: center;
  margin: 10em;
`

const Image = styled.img`
  width: 40%;
`

class Thankyou extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.location = '/'
    }, 5000)
  }

  render() {
    return(
      <Container>
         <Image src={ThankyouImage} alt="" />
      </Container>
    )
  }
}

export default Thankyou
