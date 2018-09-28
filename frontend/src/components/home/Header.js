import React from 'react'
import styled from 'styled-components'
import casual from '../../assets/home/casual.jpg'
import Menu from './Menu'

const Welcome = styled.div`
  background-position: center center;
  background-image: url(${casual});
  background-size: cover;
  min-height: 700px;
  padding-top: 60px;
`

export default () => (
  <Welcome>
    <Menu />
  </Welcome>
)
