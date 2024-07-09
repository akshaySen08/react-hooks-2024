import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Input = forwardRef((props, ref) => {

    const [search, setSearch] = useState('');

    useImperativeHandle(ref, () => ({
        reset: () => setSearch('')
    }), [search])
    return (
        <>
            <div>InputComponent</div>
            <input value={search} onChange={(e) => setSearch(e.target.value)}/>
            {search}
        </>
    )
})

export default Input