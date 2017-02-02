import React, { Component, PropTypes } from 'react'

class Repo extends Component {
	render(){
		const { repos, user } = this.props 

		return (
			<ul>
				{
					repos.length ? repos.map(repo => (
						<li key={repo.id}>
							<a href={repo.html_url} target='__blank'>
								{repo.full_name}
							</a>
						</li>
					)) : (
						<p>{user} has no repos</p>
					)
				}
			</ul>
		)
	}
}

Repo.propTypes = {

}

export default Repo