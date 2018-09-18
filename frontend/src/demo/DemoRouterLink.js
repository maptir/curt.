import React from 'react'
import { Link } from 'react-router-dom'

const DemoRouterLink = (props) => {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/redux'>Demo Redux</Link></li>
        <li><Link to='/route-component/191'>Demo Route Component</Link></li>
      </ul>
      <hr />
    </div>
  )
}

export default DemoRouterLink
