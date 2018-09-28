import React, { Component } from 'react'
import styled from 'styled-components'

const NewsProduct = props => {
  return <div>
    <img src={props.imageUrl} alt="Product Image"/>
    <div className="font-weight-bold">{props.title}</div>
    <div>{props.desc}</div>
  </div>
}

export default NewsProduct
