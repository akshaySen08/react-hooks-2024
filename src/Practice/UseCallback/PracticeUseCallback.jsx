import React, { useCallback, useState } from 'react'
import User from './User'
import Search from './Search'

const PracticeUseCallback = () => {

    const [users, setUsers] = useState([
        { name: 'Robin' },
        { name: 'Dennis' },
        { name: 'Nico' },
        { name: 'Klaus' },
        { name: 'Nina' }
    ])

    function handleShuffle() {
        const shuffledUsers = [...users].sort(() => Math.random() - 0.5)
        setUsers(shuffledUsers)
    }

    const  handleSearch = useCallback((e) => {
        console.log('searching...', users[0]?.name)
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()))

        setUsers(filteredUsers)
    }, [users])

    return (
        <>
            <h1>PracticeUseCallback</h1>
            <button onClick={handleShuffle}>Shuffle</button>
            <Search handleChange={handleSearch} />
            <hr></hr>

            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default PracticeUseCallback