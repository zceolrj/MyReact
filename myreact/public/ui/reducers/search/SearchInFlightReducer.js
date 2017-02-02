import SearchConstants from 'ui/constants/search/SearchConstants'

const searchInFlight = (state = false, action) => {
	switch (action.type) {
		case SearchConstants.SEARCHED_USERS:
			return true
		case SearchConstants.RECEIVED_USERS:
		case SearchConstants.CLEARED_SEARCH_RESULTS:
			return false
		default:
			return state
	}
}

export default searchInFlight