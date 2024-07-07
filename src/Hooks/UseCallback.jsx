import { useCallback, useMemo, useState } from "react"
import SearchInputComponent from "./SearchInput"
import UserListComponent from "./UserList"

const allUsers = [
    'Akshay',
    'kiran',
    'Shubham',
    'Dhanno',
    'Jack',
    'Alex',
    'Mike'
]

const UseCallBackComponent = () => {

    const [users, setUsers] = useState(allUsers)
    const [lastUser, setLastUser] = useState(users[0])

    const handleSearch = useCallback((searchString) => {
        console.log(users[0])
        const filteredUsers = allUsers.filter(u => u.toLowerCase().includes(searchString.toLowerCase()))
        setUsers(filteredUsers)
        setLastUser(users[0])
    }, [users])

    // const handleSearch = (searchString) => {
    //     const filteredUsers = allUsers.filter(u => u.toLowerCase().includes(searchString.toLowerCase()))
    //     setUsers(filteredUsers)
    // };

    function shuffleArray() {
        let shuffledUsers = [...users]
        for (let i = shuffledUsers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledUsers[i], shuffledUsers[j]] = [shuffledUsers[j], shuffledUsers[i]];
        }
        setUsers(shuffledUsers)
    }

    return (
        <>
            <h1>Use Call Back</h1>
            <button onClick={shuffleArray}>Shuffle</button>
            <SearchInputComponent handleChange={handleSearch} />
            <UserListComponent users={users} />
            Last searched user - {lastUser}
        </>
    )
}

export default UseCallBackComponent