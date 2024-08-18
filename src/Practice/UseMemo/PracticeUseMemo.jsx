import { useMemo, useState } from "react";
import usersList from './GetRecords'

const PracticeUseMemo = () => {

    const [users] = useState(usersList);
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     const records = GetRecords();
    //     setUsers(records);
    // }, []);

    // sorting of records
    const selected = useMemo(() => {
        console.log('useMemo called');
        return users.find((u) => u.isSelected);
    }, [users]);
    // const selected = users.find((u) => u.isSelected);
    // console.log(selected);
    

    return (
        <div>
            <h1>Practice UseMemo</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <hr />
            <h2>Users</h2>
            <h3>Selected user: {selected.id}</h3>
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