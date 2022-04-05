import React from 'react';
import {useAuth} from '../Context/Auth';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <header>
            <h1>Welcome to React Router!</h1>
            <p>{user?.username} | {user?.password}</p>

            {user?.username && <button onClick={logout}>Sair</button>}
        </header>
    );
}

export default Header;
