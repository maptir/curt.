import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Catalog from '../pages/Catalog'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/product/:slug',
    component: ProductDetail,
  },

  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/register',
    exact: true,
    component: Register,
  },
  {
    path: '/catalog',
    exact: true,
    component: Catalog,
  }
]

export default () => (
  <Fragment>
    {routes.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </Fragment>
)
