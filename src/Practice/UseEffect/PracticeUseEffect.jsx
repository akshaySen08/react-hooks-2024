import { useEffect, useState } from "react";

const PracticeUseEffect = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("Fetching users");
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
            console.log(data);
            setUsers(data);

        }).catch(error => {
            console.log(error);
        });
    }, []);

    function getUsersDetails(index) {
        setUsers((prevUsers) => 
            prevUsers.map((user, i) => 
                i === index ? { ...user, selected: !user.selected } : user
            )
        );
    }

    if (users.length === 0) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.length && users.map((user, i) => {
                    return (
                        <>
                            <li
                                key={user.id}
                                onClick={() => getUsersDetails(i)}
                            >{user.name}</li>
                            {user.selected && <span key={user.id}>{user.email}</span>}
                        </>
                    )
                })}
                <p>
                    Details
                </p>
            </ul>
        </div>
    );
}

export default PracticeUseEffect;