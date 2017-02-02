import SearchConstants from 'ui/constants/search/SearchConstants'

const initialState = []

const userResults = (state = initialState, action) => {
	switch (action.type) {
		case SearchConstants.RECEIVED_USERS:
			return action.payload.users 
		case SearchConstants.CLEARED_SEARCH_RESULTS:
			return initialState
		default:
			return state
	}
}

export default userResults