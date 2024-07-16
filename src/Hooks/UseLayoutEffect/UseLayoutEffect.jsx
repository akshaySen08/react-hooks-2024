import React, { useEffect, useLayoutEffect, useState } from 'react'

const userIds = [1, 2]

const UseLayoutEffectComponent = () => {
    const [user, setUser] = useState(userIds[0])
    const [isAdmin, setIsAdmin] = useState(true);

    let now = performance.now();
    while (performance.now() - now < 200) {
        // do nothing just slower the process
    }

    useLayoutEffect(() => {
        setIsAdmin(user === userIds[0])
    }, [user])

    function handleChange() {
        setUser(pu => userIds.find(id => id !== user))
    }

    return (
        <div>
            <h1>UseLayoutEffectComponent</h1>
            <p>userId: {user}</p>
            <p>isAdmin: {isAdmin ? 'True' : 'False'}</p>
            <button onClick={handleChange}>Change User</button>
        </div>
    )
}

export default UseLayoutEffectComponent