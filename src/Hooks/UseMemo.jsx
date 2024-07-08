import React, { useState, useMemo } from 'react'
import { initialItems } from '../utils'

const UseMemoComponent = () => {
    const [count, setCount] = useState(0)
    const [items] = useState(initialItems)

    const selectedItem = useMemo(() => initialItems.find(i => i.id === count), [count, items])

    return (
        <>
            <h1>UseMemo</h1>
            <h2>Count - {count}</h2>
            <h3>Selected Item - {selectedItem.id}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default UseMemoComponent