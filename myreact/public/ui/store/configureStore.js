import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from 'ui/reducers/rootReducer'
import rootEpic from 'ui/epics/index'

const epicMiddleware = createEpicMiddleware(rootEpic)

// const configureStore = (preloadedState, history) => {
// 	const middleware = [thunk, routerMiddleware(history), createLogger()]

// 	const store = createStore(
// 		rootReducer,
// 		preloadedState,
// 		applyMiddleware(...middleware)
// 	)

// 	return store
// }

const configureStore = (preloadedState) => {
	const middleware = [thunk, epicMiddleware, routerMiddleware(browserHistory), createLogger()]
	const composeEnhancers = compose

	const store = createStore(
		rootReducer,
		composeEnhancers(
			applyMiddleware(...middleware)
		)
	)

	return store
}

export default configureStore