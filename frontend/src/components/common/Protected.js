import React from 'react'
import { connect } from 'react-redux'
import AuthProvider from '../../providers/AuthProvider'

const Protected = (props) => {
  return (
    <AuthProvider>
      {({ isLoggedIn, openModal }) =>
        !isLoggedIn ?
          React.cloneElement(
            props.children,
            { onClick: openModal },
            props.children.props.children
          ) : props.children
      }
    </AuthProvider>
  )
}

export default Protected
