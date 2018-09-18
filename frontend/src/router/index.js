import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import DemoRedux from '../demo/DemoRedux'
import DemoRouteComponent from '../demo/DemoRouteComponent'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/redux',
    component: DemoRedux,
  },
  {
    path: '/route-component/:number', // URL params
    component: DemoRouteComponent,
  },
]

export default () => (
  <Fragment>
    {routes.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </Fragment>
)
