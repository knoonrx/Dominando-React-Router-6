import React from 'react';
import './App.css';
import UserPage from './Pages/UserPage';
import {Link, Navigate, Outlet, Route, Routes} from 'react-router-dom';
import About from './Pages/About';
import Login from './Pages/Login';
import Header from './Pages/Header';
import {useAuth} from './Context/Auth';
import Dashboard from './Pages/Dashboard';

function RequireAuth() {
    const {user} = useAuth();

    if (!user.username) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}


const App = () => {
    return (
        <div className="App">
            <Header/>
            <nav>
                <Link to="/">Home</Link> &nbsp;|&nbsp;
                <Link to="/about">About</Link> &nbsp;|&nbsp;
                <Link to="/dashboard">Dashboard</Link> &nbsp;|&nbsp;
                <Link to="/login">Login</Link>
            </nav>
            <br/>
            <Routes>
                <Route path="/" element={<UserPage/>}/>
                <Route path="login" element={<Login/>}/>
                <Route element={<RequireAuth />}>
                    <Route path="about" element={<About/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
