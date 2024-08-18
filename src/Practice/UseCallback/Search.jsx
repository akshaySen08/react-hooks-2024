import React, { memo } from 'react'

const Search = ({handleChange}) => {
    console.log('Search rendered');
    
    return (
        <>
            <input type="text"  onChange={handleChange}/>
        </>
    )
}

export default memo(Search)