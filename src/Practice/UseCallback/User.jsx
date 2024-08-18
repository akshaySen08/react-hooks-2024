import React from 'react'

const User = ({ name, index }) => {
    return (
        <li key={index}>{index} - {name} </li>
    )
}

export default User