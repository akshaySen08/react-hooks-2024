import React from 'react'
import Dashbaord from './Dashbaord'
import {UserContext} from './UserContext'

const PracticeUseContext = () => {
    return (
        <>
            <h1>PracticeUseContext</h1>
            <UserContext.Provider value={{name: "Akshay", age: 20, isLoggedIn: true}}>
                <Dashbaord />
            </UserContext.Provider>
        </>
    )
}

export default PracticeUseContext