import { createContext, useContext } from "react";


export const UserContext = createContext(undefined);

// Creating a custom hook to check if the user is logged in or not
export const useUserContext = () => {
    const user = useContext(UserContext)

    if(user === undefined) {
        throw new Error("useUserContext must be used within a UserProvider")
    }

    return user;
}


 