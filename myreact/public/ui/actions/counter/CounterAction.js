import CounterConstants from 'ui/constants/counter/CounterConstants'

const increase = () => ({
	type: CounterConstants.COUNTER_INCREASE
})

const decrease = () => ({
	type: CounterConstants.COUNTER_DECREASE
})

const CounterAction = {
	increase,
	decrease
}

export default CounterAction