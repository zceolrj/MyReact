import SearchConstants from 'ui/constants/search/SearchConstants'

const reposByUser = (state = {}, action) => {
	switch (action.type) {
		case SearchConstants.REQUESTED_USER_REPOS:
			return {
				...state,
				[action.payload.user]: undefined
			}
		case SearchConstants.RECEIVED_USER_REPOS:
			return {
				...state,
				[action.payload.user]: action.payload.repos
			}
		default:
			return state
	}
}

export default reposByUser