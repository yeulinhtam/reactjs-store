import React from 'react';
import Login from '../components/Login';
import { useSelector } from 'react-redux';
import { Redirect} from 'react-router-dom';

function LoginPage(props) {
    const localToken = JSON.parse(localStorage.getItem('userInfo'));
    const accessToken = useSelector(state => state.user.userInfo);
    
    if (localToken || accessToken) {
        return (
            <Redirect to="/" />
        );
    }
    return (
        <Login />
    );
}

export default LoginPage;