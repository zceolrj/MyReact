import { combineReducers } from 'redux'
import CounterConstants from 'ui/constants/counter/CounterConstants'

const count = (state = 0, action) => {
	switch (action.type) {
		case CounterConstants.COUNTER_INCREASE: {
			return state + 1
		}
		case CounterConstants.COUNTER_DECREASE: {
			return state - 1
		}
		default: {
			return state
		}
	}
}

const counterReducer = combineReducers({
	count
})

export default counterReducer