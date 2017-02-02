import { Observable } from 'rxjs/Observable'
import { replace } from 'react-router-redux'
import SearchConstants from 'ui/constants/search/SearchConstants'
import SearchAction from 'ui/actions/search/SearchAction'
import { ajax } from 'rxjs/observable/dom/ajax'

const searchUsers = (action$) => {
	console.log('SearchUserEpics searchUsers, action$ is', action$)

	return action$.ofType(SearchConstants.SEARCHED_USERS)
		.map(action => action.payload.query)
		.filter(q => !!q)
		.switchMap(q => {
			return Observable.timer(800) // debounce
				.takeUntil(action$.ofType(SearchConstants.CLEARED_SEARCH_RESULTS))
				.mergeMap(() => Observable.merge(
					Observable.of(replace(`search?q=${q}`)),
					ajax.getJSON(`https://api.github.com/search/users?q=${q}`)
						.map(res => res.items)
						.map(SearchAction.receiveUsers)
				))
		})
}

export default searchUsers