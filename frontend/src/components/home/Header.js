import React from 'react'
import styled from 'styled-components'
import casual from '../../assets/home/casual.jpg'

const Welcome = styled.div`
  background-image: url(${casual});
  background-size: cover;
  min-height: 700px;
`

export default () => <Welcome />
