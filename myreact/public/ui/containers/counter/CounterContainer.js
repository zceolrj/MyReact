import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import Counter from 'ui/components/counter/Counter'

import CounterAction from 'ui/actions/counter/CounterAction'

class CounterContainer extends Component {
	render() {
		const { count } = this.props
		const { onIncrement, onDecrement } = this.props

		return (
			<Counter count={count}
				onIncrement={onIncrement}
				onDecrement={onDecrement} />
		)
	}
}

const mapStateToProps = (state) => ({
	count: state.counter.count
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onIncrement: () => {
		dispatch(CounterAction.increase())
	},
	onDecrement: () => {
		dispatch(CounterAction.decrease())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)