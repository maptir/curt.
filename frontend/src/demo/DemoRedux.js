import React from 'react'
import { connect } from 'react-redux'
import * as counterActions from '../redux/modules/counter'

const DemoRedux = (props) => {
  // extract redux states & actions from props
  const { count, increaseCounter, decreaseCounter } = props
  return (
    <div>
      <h1>{ count }</h1>
      <button onClick={increaseCounter}>➕</button>
      <button onClick={decreaseCounter}>➖</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state.counter // state.counter = { count: 0 }
})

const mapDispatchToProps = {
  ...counterActions // increaseCounter(), decreaseCounter()
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux)
