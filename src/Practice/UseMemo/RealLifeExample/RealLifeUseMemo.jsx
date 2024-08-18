import React, { useState } from 'react'
import FilteredUsers from './FilteredUsers'
import usersList from './data';

const RealLifeUseMemo = () => {
    const [users] = useState(usersList);
    const [searchKey, setSearchKey] = useState('');
    return (
        <>
            <h1>RealLifeUseMemo</h1>
            <input placeholder='Search user name' onChange={(e) => setSearchKey(e.target.value)} />
            <FilteredUsers users={users} searchKey={searchKey} />
        </>

    )
}

export default RealLifeUseMemo