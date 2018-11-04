import React from 'react'
import CustomBoard from '../components/custom/CustomBoard'
class Custom extends React.Component {
  render() {
    return <CustomBoard {...this.props} />
  }
}

export default Custom
