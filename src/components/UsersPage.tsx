import axios from 'axios';
import { useEffect, useState,useRef } from 'react';
import type { ReqResUserListResponse, User } from '../interfaces';

const loadUsers = async (page: number = 1): Promise<User[]> => {
    try {
        const { data } = await axios.get<ReqResUserListResponse>(
            'https://reqres.in/api/users',
            {
                params: {
                    page: page
                }
            }
        );
        return data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const currentPageRef = useRef(1);
    useEffect(() => {
        loadUsers().then((users) => setUsers(users));
        // fetch('https://reqres.in/api/users?page=2')
        // .then(resp => resp.json())
        // .then(data => console.log(data) );
    },[]);
    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);
        console.log(JSON.stringify(users))
        if (users.length>0){
            setUsers(users);
        }else {
            currentPageRef.current--;
        }
    }
    const prevPage = async() => {
        if(currentPageRef.current < 1) return;
        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setUsers(users)
    }
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

interface Props {
    user: User;
}

export const UserRow = ({ user }: Props) => {
    const { avatar, first_name, last_name, email } = user;
    return (
        <tr key={user.id}>
            <td>
                <img style={{ width: '50px' }} src={avatar} alt="User avatar" />
            </td>
            <td>
                {first_name}
                {last_name}
            </td>
            <td>{email}</td>
        </tr>
    );
};
