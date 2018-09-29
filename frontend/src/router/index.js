import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },

  {
    path: '/login',
    exact: true,
    component: Login,
  }
]

export default () => (
  <Fragment>
    {routes.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </Fragment>
)
