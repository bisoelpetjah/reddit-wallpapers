require('./css/styles.css')

import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import routes from 'routes'
import reducers from 'reducers'

const history = createBrowserHistory()
const store = applyMiddleware(thunkMiddleware)(createStore)(reducers, window.__INITIAL_STATE__)

render((
    <Provider store={store}>
      <Router children={routes} history={history} />
    </Provider>
  ),
  document.getElementById('react-view')
)
