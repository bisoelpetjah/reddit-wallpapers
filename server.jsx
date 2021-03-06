import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RoutingContext} from 'react-router'
import createLocation from 'history/lib/createLocation'
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import routes from 'routes'
import reducers from 'reducers'
import {fetchWallpaperList} from 'actions'

const app = express()

app.use(favicon(path.join(__dirname, 'public', 'images', 'icon.png')))
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  GLOBAL.navigator = {userAgent: req.headers['user-agent']}
  next()
})

app.use((req, res) => {
  const location = createLocation(req.url)
  const store = applyMiddleware(thunkMiddleware)(createStore)(reducers)

  match({routes, location: location}, (error, redirectLocation, renderProps) => {
    if (error) res.status(500).end('Internal server error.')
    if (!renderProps) res.status(404).end('Not Found.')

    store.dispatch(fetchWallpaperList(null))
        .then(() => {
          const componentHtml = renderToString(
            <Provider store={store}>
              <RoutingContext {...renderProps} />
            </Provider>
          )
          const initialState = store.getState()

          const HTML = `
            <!DOCTYPE html>
            <html>
              <head>
                <title>Reddit Wallpapers</title>

                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <link rel="stylesheet" href="/dist/bundle.min.css">

                <script type="application/javascript">
                  window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                </script>
              </head>
              <body>
                <div id="react-view">${componentHtml}</div>

                <script type="application/javascript" src="/dist/bundle.min.js"></script>
              </body>
            </html>
          `
          res.end(HTML)
        })
  })
})

export default app
