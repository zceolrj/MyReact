import { combineEpics } from 'redux-observable'
import searchUsers from './SearchUsersEpics'
import clearSearchResults from './ClearSearchResultsEpics'
import fetchReposByUser from './FetchReposByUserEpics'
import adminAccess from './AdminAccessEpics'

export default combineEpics(
  	searchUsers,
  	clearSearchResults,
  	fetchReposByUser,
  	adminAccess
)