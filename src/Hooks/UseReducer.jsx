import React, { useReducer } from 'react'

function reducer(state, action) {
    const { type } = action
    let newCount
    let hasError
    switch (type) {
        case 'increment':
            newCount = state.count++;
            hasError = newCount > 5;
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? "Maximum limit reached" : ""
            }
        case 'decrement':
            newCount = state.count--;
            hasError = newCount < 0;
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? "Minimum limit reached" : ""
            }
        default:
            return state
    }
}

const UseReducerComponent = () => {

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null
    })
    return (
        <>
            <h1>UseReducer</h1>

            <h2>Count - {state.count}</h2>
            {state.error && <div className='error'>{state.error}</div>}
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </>
    )
}

export default UseReducerComponent