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

const NewsProduct = props => {
  return (
    <Link to="/">
      <div {...props}>
        <Padding>
          <Image className="img-fluid" imageUrl={props.imageUrl} />
        </Padding>
        <div className="font-weight-bold m-1">{props.title}</div>
        <div className="m-1">{props.desc}</div>
      </div>
    </Link>
  )
}

export default NewsProduct
