import React, { Component } from 'react'
import styled from 'styled-components'

const DemoRouteComponent = (props) => {
  return (
    <h2>
      param = <span className="badge badge-primary">{ props.match.params.number }</span>
    </h2>
  )
}

export default DemoRouteComponent
