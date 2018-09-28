import React from 'react'
import styled from 'styled-components'
import pic from '../../assets/home/header-pic.jpg'
import Menu from './Menu'

const Welcome = styled.div`
  background-position: center 50% ;
  background-image: url(${pic});
  background-size: cover;
  ${'' /* min-height: 700px; */}
  min-height: 75vh;
  padding-top: 60px;
`

export default () => (
  <Welcome>
    <Menu />
  </Welcome>
)
