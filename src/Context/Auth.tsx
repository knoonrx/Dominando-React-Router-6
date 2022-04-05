import {createContext, useContext, useEffect, useState} from 'react';

interface User {
    username: string,
    password: string
}

interface AuthContextData {
    user: User;
    login: (username: string, password: string) => any;
    logout: () => any;
}

function setLocalStorage(key: string, value: any) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        // 
    }
}

function getInitialState() {
    const _user = localStorage.getItem('@App:user')
    return _user ? JSON.parse(_user) : {}
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState<User>(getInitialState);

    const login = (username: string, password: string) => {
        setLocalStorage('@App:user', {username, password});
        setUser({username, password})
    }

    const logout = () => {
        setUser({} as User);
        localStorage.removeItem('@App:user');
    }

    useEffect(() => {
        setLocalStorage('@App:user', user);
        console.log(user)
    }, [user]);

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

export function useAuth() {
    return useContext(AuthContext);
}
