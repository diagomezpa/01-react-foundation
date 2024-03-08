import { useUsers } from "../hooks";
import { User } from "../interfaces";
import { UserRow } from "./UserRow";

export const UsersPage = () => {
    const {users,prevPage,nextPage} = useUsers();
    return (
        <>
            <h3>usuarios:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <UserRow key={user.id} user={user}></UserRow>
                    ))}
                </tbody>
            </table>

            <div>
                
                <button onClick={()=>prevPage()}>Pre</button>
                <button onClick={()=>nextPage()}>Next</button>
            </div>
        </>
    );
};

