import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/product/:id',
    component: ProductDetail,
  },
]

export default () => (
  <Fragment>
    {routes.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </Fragment>
)
