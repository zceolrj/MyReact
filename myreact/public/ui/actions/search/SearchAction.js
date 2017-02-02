import SearchConstants from 'ui/constants/search/SearchConstants'

const searchUsers = (query) => ({
	type: SearchConstants.SEARCHED_USERS,
	payload: {
		query
	}
})

const receiveUsers = (users) => ({
	type: SearchConstants.RECEIVED_USERS,
	payload: {
		users
	}
})

const clearSearchResults = () => ({
	type: SearchConstants.CLEARED_SEARCH_RESULTS
})

const requestReposByUser = (user) => ({
	type: SearchConstants.REQUESTED_USER_REPOS,
	payload: {
		user
	}
})

const receiveUserRepos = (user, repos) => ({
	type: SearchConstants.RECEIVED_USER_REPOS,
	payload: {
		user,
		repos
	}
})

const checkAdminAccess = () => ({
	type: SearchConstants.CHECKED_ADMIN_ACCESS
})

const accessDenied = () => ({
	type: SearchConstants.ACCESS_DENIED
})

const SearchAction = {
	searchUsers,
	receiveUsers,
	clearSearchResults,
	requestReposByUser,
	receiveUserRepos,
	checkAdminAccess,
	accessDenied
}

export default SearchAction