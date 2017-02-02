import { Observable } from 'rxjs/Observable'
import { push } from 'react-router-redux'
import SearchConstants from 'ui/constants/search/SearchConstants'
import SearchAction from 'ui/actions/search/SearchAction'

const adminAccess = (action$) => {
	// if you wanted to do an actual access check,
	// you could do so here then filter by failed checks.
	return action$.ofType(SearchConstants.CHECKED_ADMIN_ACCESS)
		.delay(2000)
		.mergeMap(() => Observable.merge(
			Observable.of(SearchAction.accessDenied()),
			Observable.timer(2000)
				.map(() => push('/search'))
		))
}

export default adminAccess