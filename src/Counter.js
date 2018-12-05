import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement, reset } from './state/counter'

const Counter = (props) => (
    <div>
        <h1>
            Counter state: {props._counterValue}
        </h1>
        <button
            onClick={() => { props._increment() }}
        >
            +
    </button>
        <button
            onClick={() => { props._decrement() }}
        >
            -
    </button>
        <button
            onClick={() => { props._reset() }}
        >
            Reset
    </button>
    </div>
)

const mapStateToProps = state => ({
    _counterValue: state.counter.number
})

const mapDispatchToProps = dispatch => ({
    _increment: () => dispatch(increment()),
    _decrement: () => dispatch(decrement()),
    _reset: () => dispatch(reset())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)