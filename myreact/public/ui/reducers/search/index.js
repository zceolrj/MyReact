import { combineReducers } from 'redux'

import UserResultReducer from './UserResultReducer'
import SearchInFlightReducer from './SearchInFlightReducer'
import ReposByUserReducer from './ReposByUserReducer'
import AdminAccessReducer from './AdminAccessReducer'

export default combineReducers({
	userResults: UserResultReducer,
	searchInFlight: SearchInFlightReducer,
	reposByUser: ReposByUserReducer,
	adminAccess: AdminAccessReducer
})