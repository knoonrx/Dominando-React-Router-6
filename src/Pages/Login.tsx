import React, {useState} from 'react';
import {useAuth} from '../Context/Auth';
import {Navigate} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {login, user} = useAuth();

    const handleLogin = () => login(username, password);

    if (user.username) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <br/>
            Nome:
            <input value={username} onInput={(e: any) => setUsername(e.target.value)} type="text"/>
            <br/>
            <br/>
            senha:
            <input value={password} onInput={(e: any) => setPassword(e.target.value)} type="text"/><br/>
            <br/>
            <button onClick={handleLogin} >Enviar</button>
        </>
    );
}

export default Login;
