import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import UserSearchInput from 'ui/components/search/UserSearchInput'
import UserSearchResult from 'ui/components/search/UserSearchResult'

import SearchAction from 'ui/actions/search/SearchAction'

class UserSearchContainer extends Component {
	constructor(props) {
		super(props)

		this.handleUserSearch = this.handleUserSearch.bind(this)
	}

	componentDidMount() {
		this.handleUserSearch(this.props.query)
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.query !== nextProps.query) {
			this.handleUserSearch(nextProps.query)
		}
	}

	handleUserSearch(query) {
		const { searchUsers } = this.props

		searchUsers(query)
	}

	render() {
		const { query, results, searchInFlight } = this.props

		const style = {
			display: 'block',
			marginBottom: 10
		}

		return (
			<div>
				<Link to='/admin' style={style}>Admin Panel</Link>
				<UserSearchInput
					defaultValue={query}
					onChange={this.handleUserSearch} />

				<UserSearchResult
					results={results}
					loading={searchInFlight} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	results: state.search.userResults,
	searchInFlight: state.search.searchInFlight
})

const mapDispatchToProps = (dispatch) => ({
	searchUsers: (query) => {
		dispatch(SearchAction.searchUsers(query))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchContainer)