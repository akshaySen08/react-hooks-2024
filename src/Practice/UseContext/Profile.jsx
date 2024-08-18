import React from 'react'
import { useUserContext } from './UserContext'

const Profile = () => {
    const user = useUserContext()
    return (
        <>
            <h1>Profile - {user.name}</h1>
            <p>{user.age}</p>
        </>
    )
}

export default Profile