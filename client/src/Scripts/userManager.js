import Sider from 'antd/lib/layout/Sider';
import { useState } from 'react';

export default function useUser() {
    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user = JSON.parse(userString);
        return user;
    }
    const [user, setUser] = useState(getUser());
    const saveUser = user => {
        if (user == undefined) {
            sessionStorage.removeItem('user');
            return;
        }
        sessionStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    }
    return {
        setUser: saveUser,
        user
    }
}