import React from 'react'
import styled from 'styled-components'
import casual from '../../assets/home/casual.jpg'

const Welcome = styled.div`
  background-url: url(${casual});
  background-size: cover;
`

export default () => <Welcome />
