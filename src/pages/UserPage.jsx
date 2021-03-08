import React from 'react';
import UserComponent from './../components/User';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserPage(props) {

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const accessToken = useSelector(state => state.user.userInfo);

  if (userInfo || accessToken) {
    return (
      <React.Fragment>
        <UserComponent userInfo = {accessToken}/>
      </React.Fragment>
    );
  }

  return (
    <Redirect to="/"/>
  );
}

export default UserPage;