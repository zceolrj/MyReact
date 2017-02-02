import { ajax } from 'rxjs/observable/dom/ajax'
import SearchConstants from 'ui/constants/search/SearchConstants'
import SearchAction from 'ui/actions/search/SearchAction'

const fetchReposByUser = (action$) => {
	console.log('FetchReposByUserEpics fetchReposByUser, action$ is', action$)

	return action$.ofType(SearchConstants.REQUESTED_USER_REPOS)
		.map(action => action.payload.user)
		.switchMap(user => {
			return ajax.getJSON(`https://api.github.com/users/${user}/repos`)
				.map(SearchAction.receiveUserRepos.bind(null, user))
		})
}

export default fetchReposByUser