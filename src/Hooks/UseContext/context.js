import { createContext, useContext } from "react";

export const UserContext = createContext(undefined)

/* Custom hook is the user is undefined */
export const useUserContext = () => {
    const user = useContext(UserContext)

    if (!user) {
        throw new Error('User is undefined')
    }

    return user
}