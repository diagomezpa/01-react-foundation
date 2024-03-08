import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { ReqResUserListResponse, User } from '../interfaces';

export const loadUsers = async (page: number = 1): Promise<User[]> => {
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

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        loadUsers().then((users) => setUsers(users));
        // fetch('https://reqres.in/api/users?page=2')
        // .then(resp => resp.json())
        // .then(data => console.log(data) );
    }, []);
    const currentPageRef = useRef(1);

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);
        console.log(JSON.stringify(users));
        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current--;
        }
    };
    const prevPage = async () => {
        if (currentPageRef.current < 1) return;
        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setUsers(users);
    };
    return {
        users,

        nextPage,
        prevPage
    };
};
