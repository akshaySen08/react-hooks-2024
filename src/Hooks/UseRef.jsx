import React, { useEffect, useRef, useState } from 'react'

const UseRefComponent = () => {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
    const inputRef = useRef(null)

    /* USE CASE OF USEREF - FOCUSING INPUT ELEMENT */
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleIncrement = () => {
        setCount(count + 1)
        countRef.current++

        // console.log("Count " + count);
        console.log('Ref ' + countRef.current);
    }

    return (
        <>
            <h1>UseRefComponent</h1>
            <h4>Count - {count}</h4>
            <h4>CountRef - {countRef.current}</h4>
            <button onClick={handleIncrement}>Increment</button>
            <input type='text' ref={inputRef}/>
            {inputRef.current}
        </>

    )
}

export default UseRefComponent