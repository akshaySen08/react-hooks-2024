import { useUserContext } from "./context"

const SidebarComponent = () => {
    const user = useUserContext()
    return (
        <>
            <h1>Sidebar</h1>
            <h2>{user.name}</h2>
        </>
    )
}

export default SidebarComponent