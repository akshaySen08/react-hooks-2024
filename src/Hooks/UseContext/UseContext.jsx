import { useState } from "react";
import DashboardComponent from "./Dashboard";
import { UserContext } from "./context";

const UseContextComponent = () => {
    const [user, setUser] = useState({
        isSubscribed: true,
        name: 'Akshay'
    })
    
    return (
        <>
            <UserContext.Provider value={user}>
                <input type="text" onChange={(e) => setUser((p) => ({...p, name: e.target.value}))}/>
                <DashboardComponent />
            </UserContext.Provider>
        </>
    )
}

export default UseContextComponent;