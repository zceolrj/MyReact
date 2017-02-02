import SearchConstants from 'ui/constants/search/SearchConstants'

const DENIED = 'DENIED'

const adminAccess = (state = null, action) => {
	switch (action.type) {
		case SearchConstants.ACCESS_DENIED:
			return DENIED
		default:
			return state
	}
}

export default adminAccess