import React from 'react'
import { useUserContext } from './UserContext'

const Sidebar = () => {
    const user = useUserContext()
    return (
        <>
            <h1>Sidebar - {user.isLoggedIn ? "Active" : "Inactive"}</h1>
        </>
    )
}

export default Sidebar