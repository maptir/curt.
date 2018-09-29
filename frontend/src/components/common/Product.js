import React from 'react'
import styled from 'styled-components'

import StyledLink from '../common/StyledLink'

const Overlay = styled(StyledLink)`
  display: flex;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 300ms;

  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1em;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.6)
  );
`

const Image = styled.div`
  background: url(${props => props.imageUrl}) center center / cover no-repeat;
  width: 100%;
  padding-top: 100%;
  max-height: 200px;
  position: relative;

  :hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`

const Title = styled.div`
  margin: 5px;
  margin-top: 10px;
  font-weight: bold;
  text-align: ${props => props.align || 'left'};
`

const Desc = styled.div`
  margin: 5px;
  color: grey;
  font-size: 13px;
  text-align: ${props => props.align || 'left'};
`

const Text = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
  transition: all 300ms;
`

const Product = props => {
  return (
    <div {...props}>
      <div>
        <Image className="img-fluid" imageUrl={props.imageUrl}>
          <Overlay to={props.to}>
            <Text>SHOP NOW</Text>
          </Overlay>
        </Image>
      </div>
      <StyledLink to={props.to}>
        <Title align={props.align}>{props.title}</Title>
      </StyledLink>
      <StyledLink to={props.to}>
        <Desc align={props.align}>{props.desc}</Desc>
      </StyledLink>
    </div>
  )
}

Product.defaultProps = {
  to: '/',
}

export default Product
