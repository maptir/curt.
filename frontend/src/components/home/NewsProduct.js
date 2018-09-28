import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Image = styled.div`
  background: url(${props => props.imageUrl}) center center / cover no-repeat;
  width: 100%;
  padding-top: 100%;
  max-height: 200px;
`

const Padding = styled.div`
  padding: 20px;
`

const StyledLink = styled(Link)`
  color: black !important;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`

const Title = styled.div`
  margin: 5px;
  margin-top: 10px;
  font-weight: bold;
`

const Desc = styled.div`
  margin: 5px;
  color: grey;
  font-size: 13px;
`

const NewsProduct = props => {
  return (
    <Padding {...props}>
      <StyledLink to="/">
        <Image className="img-fluid" imageUrl={props.imageUrl} />
      </StyledLink>
      <StyledLink to="/">
        <Title>{props.title}</Title>
      </StyledLink>
      <StyledLink to="/">
        <Desc>{props.desc}</Desc>
      </StyledLink>
    </Padding>
  )
}

export default NewsProduct
