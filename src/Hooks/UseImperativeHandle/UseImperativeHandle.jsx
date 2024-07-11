import React, { useRef } from 'react'
import Counter from './Counter'
import Input from './Input'

const UseImperativeHandleComponent = () => {

    const counterRef = useRef()
    const inputRef = useRef()

    return (
        <>
            <h1>UseImperativeHandle</h1>

            <Counter ref={counterRef} />
            <button onClick={() => counterRef.current.increment()}>Increment</button>
            <button onClick={() => counterRef.current.reset()}>Reset</button>
            <br></br>
            <hr />
            <Input ref={inputRef} />
            <button onClick={() => inputRef.current.reset()}>Reset input</button>
        </>

    )
}

export default UseImperativeHandleComponent