import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import CounterReducer from './counter/CounterReducer'
import SearchReducer from './search/index'

const rootReducer = combineReducers({
	routing: routerReducer,
	counter: CounterReducer,
	search: SearchReducer
})

export default rootReducer