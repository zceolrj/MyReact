import React, { Component, PropTypes } from 'react'

class UserSearchInput extends Component {
	render(){
		const { value, defaultValue, onChange } = this.props

		return (
			<input
				type='text'
				placeholder='Search for a GH user'
				defaultValue={defaultValue}
				onChange={ (e) => onChange(e.target.value) } />
		)
	}
}

UserSearchInput.propTypes = {
	onChange: PropTypes.func.isRequired
}

export default UserSearchInput