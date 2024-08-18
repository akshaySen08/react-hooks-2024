import React, { useReducer } from 'react'

function CounterReducer(state, action) {
    switch (action.type) {
        case 'increment':{
            const newCount = state.count + 1;
            const hasError = newCount > 10;
            state = {
                count: hasError ? state.count : newCount,
                error: hasError ? 'Count can not be more than 10' : null 
            };
            break;
        }
        case 'decrement':
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            state = {
                count: hasError ? state.count : newCount,
                error: hasError ? 'Count can not be less than 0' : null
            };
            break;
        default:
            state = {...state, error: 'Invalid Action'};
            break;
    }

    return state;
}

const PracticeUseReducer = () => {
    const [count, dispatch] = useReducer(CounterReducer, {
        count: 0,
        error: null
    })

    const handleClick = (type) => {
        dispatch({type})
    }

    return (
        <>
            <h1>PracticeUseReducer</h1>
            <p>Count - {count.count}</p>
            <p>{count.error}</p>
            <button onClick={() => handleClick('increment')}>Increment +</button>
            <button onClick={() => handleClick('decrement')}>Decrement -</button>
        </>

    )
}

export default PracticeUseReducer