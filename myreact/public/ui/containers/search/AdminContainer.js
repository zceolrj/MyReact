import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SearchAction from 'ui/actions/search/SearchAction'

class AdminContainer extends Component {
	componentDidMount() {
		const { checkAdminAccess } = this.props

		checkAdminAccess()
	}

	render() {
		const { adminAccess } = this.props 

		if(!adminAccess) {
			return (
				<p>Checking access...</p>
			)
		}

		if(adminAccess === 'GRANTED') {
			return (
				<p>Access granted</p>
			)
		}

		return (
			<p>Access denied. Redirecting back home.</p>
		)
	}
}

const mapStateToProps = (state) => ({
	adminAccess: state.search.adminAccess
})

const mapDispatchToProps = (dispatch) => ({
	checkAdminAccess: () => {
		dispatch(SearchAction.checkAdminAccess())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)