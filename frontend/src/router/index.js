import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Catalog from '../pages/Catalog'
import Checkout from '../pages/Checkout'
import Thankyou from '../components/checkout/Thankyou'
import Custom from '../pages/Custom'
import Admin from '../pages/Admin'

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
  },
  {
    path: '/checkout',
    exact: true,
    component: Checkout,
  },
  {
    path: '/checkout/complete',
    exact: true,
    component: Thankyou,
  },
  {
    path: '/custom/:slug',
    exact: true,
    component: Custom,
  },
  {
    path: '/admin',
    exact: true,
    component: Admin,
  },
  
]

export default () => (
  <Fragment>
    {routes.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </Fragment>
)
