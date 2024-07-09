import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Counter = forwardRef((props, ref) => {

    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
        increment: () => setCount(count + 1),
        reset: () => setCount(0)
    }), [count])

    return (
        <div>Counter - {count}</div>
    )
})

export default Counter