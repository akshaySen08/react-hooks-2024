import { useContext } from "react"
import { UserContext, useUserContext } from "./context"

const ProfileComponent = () => {
    const user = useUserContext()
    return (
        <>
            <h1>Profile</h1>
            <h2>{user.name}</h2>
        </>
    )
}

export default ProfileComponent