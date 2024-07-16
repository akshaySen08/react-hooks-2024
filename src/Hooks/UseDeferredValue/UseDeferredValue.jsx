import { useDeferredValue, useEffect, useState } from 'react'
import Input from './Input'
import DeferredSearchExample1 from './Example1'

const UseDeferredValueComponent = () => {
    const [searchQuery, setSearchQuery] = useState()
    const deferredQuery = useDeferredValue(searchQuery)
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grapes", "Honeydew", "Kiwi", "Lemon"];


    function handleOnChange(e) {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        console.log('searrchedQuery ' + searchQuery);
        console.log('deferreQuery ' + deferredQuery);
        console.log("---------------------------------");
    }, [searchQuery, deferredQuery])

    return (
        <>
            <h1>UseDeferredValueComponent</h1>
            <Input searchQuery={searchQuery} onChange={handleOnChange} />
            <ul>
                {
                    Array.from(Array(1).keys()).map(itm => <li key={itm}>{deferredQuery}</li>)
                }
            </ul>

            <DeferredSearchExample1 items={fruits}/>
        </>
    )
}

export default UseDeferredValueComponent