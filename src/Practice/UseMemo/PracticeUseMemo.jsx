import { useEffect, useMemo, useState } from "react";
import GetRecords from "./GetRecords";

const PracticeUseMemo = () => {

    const [users, setUsers] = useState(GetRecords());
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     const records = GetRecords();
    //     setUsers(records);
    // }, []);

    // sorting of records
    const selected = useMemo(() => users.filter((u) => u.isSelected), [users]);

    return (
        <div>
            <h1>Practice UseMemo</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <hr />
            <h2>Users</h2>
            <h3>Selected user: {selected}</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default PracticeUseMemo;