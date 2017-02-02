import SearchConstants from 'ui/constants/search/SearchConstants'
import SearchAction from 'ui/actions/search/SearchAction'

const clearSearchResults = (action$) => {
	console.log('ClearSearchResultsEpics clearSearchResults, action$ is', action$)

	return action$.ofType(SearchConstants.SEARCHED_USERS)
		.filter(action => !!!action.payload.query)
		.map(SearchAction.clearSearchResults)
}

export default clearSearchResults