import { memo } from "react";

const UserListComponent = ({users}) => {
    console.log('User list re rendered')
    return (
        <>
            <ul>
                {users.map(u => (
                    <li key={u}>
                        {u}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default memo(UserListComponent);