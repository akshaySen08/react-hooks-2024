import React, { useMemo } from 'react'

const FilteredUsers = ({ users, searchKey }) => {

    const filteredUsers = useMemo(() => {
        console.log('useMemo called');
        
        return users.filter(user => user.name.toLowerCase().includes(searchKey.toLowerCase()))
    }, [users, searchKey]);

    return (
        <>
            <h2>Filtered Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name.split(" ").map(word => (
                                word.toLowerCase().includes(searchKey.toLowerCase()) ? <span style={{ backgroundColor: 'yellow' }}>{word} </span> : word + " "
                                
                            ))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default FilteredUsers