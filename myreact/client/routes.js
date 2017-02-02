import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import CounterContainer from 'ui/containers/counter/CounterContainer'
import AdminContainer from 'ui/containers/search/AdminContainer'
import RepoContainer from 'ui/containers/search/RepoContainer'
import UserSearchContainer from 'ui/containers/search/UserSearchContainer'

// const routes = (
// 	<Router history={browserHistory}>
// 		<Route path="/counter" component={CounterContainer} />
// 	</Router>
// )

// export default routes

// const routes = (
// 	<Route path='/counter' component={CounterContainer} />
// 	<Route path='/search' component={UserSearchContainer} />
// 	<Route path='/repos/:user' component={RepoContainer} />
// 	<Route path='/admin' component={AdminContainer} />
// )

// export default routes

const createRoutes = (history) => (
	<Router history={history}>
		
		<Route path='/counter' component={CounterContainer} />
		<Route path='/search' component={UserSearchContainer} />
		<Route path='/repos/:user' component={RepoContainer} />
		<Route path='/admin' component={AdminContainer} />
	</Router>
)

export default createRoutes