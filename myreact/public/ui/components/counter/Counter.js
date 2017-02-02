import React, { Component, PropTypes } from 'react'

class Counter extends Component {
	render() {
		const { count, onIncrement, onDecrement } = this.props

		return (
			<p>
				Clicked: { count } times
				{' '}
				<button onClick={onIncrement}>+</button>
				{' '}
				<button onClick={onDecrement}>-</button>
			</p>
		)
	}
}

Counter.propTypes = {
	count: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired
}

Counter.defaultProps = {
	count: 0,
	onIncrement: () => {},
	onDecrement: () => {}
}

export default Counter