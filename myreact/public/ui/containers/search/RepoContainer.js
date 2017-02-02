import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Repo from 'ui/components/search/Repo'

import SearchAction from 'ui/actions/search/SearchAction'

class RepoContainer extends Component {
	componentDidMount(){
		const { requestReposByUser } = this.props

		requestReposByUser(this.props.params.user)
	}

	render(){
		const { reposByUser, user } = this.props

		if(!reposByUser[user]) {
			return (
				<p>Loading</p>
			)
		}

		return (
			<Repo
				repos={reposByUser[user]}
				user={user} />
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	query: state.routing.locationBeforeTransitions.query.q,
	reposByUser: state.search.reposByUser,
	user: ownProps.params.user
})

const mapDispatchToProps = (dispatch) => ({
	requestReposByUser: (user) => {
		dispatch(SearchAction.requestReposByUser(user))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(RepoContainer)