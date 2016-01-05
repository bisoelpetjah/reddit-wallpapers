require('./css/styles.css')

import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import routes from 'routes'
import reducers from 'reducers'

let initialState = window.__INITIAL_STATE__

const store = applyMiddleware(thunkMiddleware)(createStore)(reducers, initialState)

render((
    <Provider store={store}>
      <Router children={routes} history={browserHistory} />
    </Provider>
  ),
  document.getElementById('react-view')
)
