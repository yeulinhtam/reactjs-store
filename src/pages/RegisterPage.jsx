import React from 'react';
import Register from './../components/Register';
import { useSelector } from 'react-redux';
import { Redirect} from 'react-router-dom';


function RegisterPage(props) {
    const localToken = JSON.parse(localStorage.getItem('userInfo'));
    const accessToken = useSelector(state => state.user.userInfo);
    
    if (localToken || accessToken) {
        return (
            <Redirect to="/" />
        );
    }
    return (
       <Register />
    );
}

export default RegisterPage;