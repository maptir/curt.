import React from 'react'
import styled from 'styled-components'

import LogoImage from '../../assets/logo/logoblack.png'

const Center = styled.div`
  text-align: center;
  margin: 50px;
  font-size: 18px;
`

const SloganText = styled.div`
  color: grey;
`

const Logo = styled.img`
  height: 40px;
  margin: 1em;
`

const Year = styled.div`
  font-weight: 400;
  padding-bottom: 10px;
`

const Slogan = () => {
  return (
    <Center>
      <SloganText>&quot;BE YOURSELF, BE CURT.&quot;</SloganText>
      <Logo src={LogoImage} alt="" />
      <Year>&reg; 2018</Year>
    </Center>
  )
}

export default Slogan
