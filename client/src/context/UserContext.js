import { createContext } from 'react';

import { useSessionStorage } from '../hooks/sessionStorige';

export const userContext = createContext();

export const UserProvider = ({ children }) => {

    let [ user, setUser ] = useSessionStorage('user', {});

    const addUserData = (userData) => {
        setUser(userData);
    }

    const removeUserData = () => {
        setUser({});
    }

    return (
        <userContext.Provider value={{ user, addUserData, removeUserData }}>
            {children}
        </userContext.Provider>
    )
}