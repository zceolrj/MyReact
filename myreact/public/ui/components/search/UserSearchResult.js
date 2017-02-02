import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class UserSearchResult extends Component {
	render(){
		const { results, loading } = this.props 

		const style = {
			opacity: loading ? 0.3 : 1
		}

		return (
			<ul style={style}>
				{
					results.map(result => (
						<li key={result.id}>
							<Link to={`/repos/${result.login}`}>
								{result.login}
							</Link>
						</li>
					))
				}
			</ul>
		)
	}
}

UserSearchResult.propTypes = {

}

export default UserSearchResult