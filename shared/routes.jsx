import React from 'react'
import {Route} from 'react-router'

import Home from 'pages/home'

export default (
  <Route name="app">
    <Route component={Home} path="/" />
  </Route>
)
