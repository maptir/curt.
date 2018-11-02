import React, { Fragment } from 'react'
import fabric from '../lib/fabric'
import CustomPane from './CustomPane'

class CustomBoard extends React.Component {
  state = {}

  componentDidMount = () => {
    fabric.drawing()
  }

  componentWillUnmount = () => {}

  render() {
    return (
      <Fragment>
        <canvas id="custom" width="500" height="500" />
        <CustomPane />
      </Fragment>
    )
  }
}

export default CustomBoard
