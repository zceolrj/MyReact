// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { browserHistory } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'
// import configureStore from 'ui/store/configureStore'
// import routes from './routes'

// const preloadedState = {}

// const store = configureStore(preloadedState, browserHistory)

// ReactDOM.render(
// 	<Provider store={store}>
// 		{ routes }
// 	</Provider>,
// 	document.getElementById('root')
// )

import 'rxjs'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory, Redirect } from 'react-router'
import { Provider } from 'react-redux'
// import { createStore, applyMiddleware, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import configureStore from 'ui/store/configureStore'

// import routes from './routes'
import createRoutes from './routes'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

const routes = createRoutes(history)

ReactDOM.render(
	<Provider store={store}>
		{ routes }
	</Provider>,
	document.getElementById('root')
)