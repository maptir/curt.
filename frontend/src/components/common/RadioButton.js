import React from 'react'
import styled from 'styled-components'

class RadioButton extends React.Component {

  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <div class="pretty p-default p-round p-smooth">
          <input type="radio" name={this.props.group}/>
          <div class="state">
            <label style={{marginLeft: '3px', fontWeight: '100', fontSize: '14px'}}>{this.props.label}</label>
          </div>
        </div>
      </div>
    )
  }
}

export default RadioButton
