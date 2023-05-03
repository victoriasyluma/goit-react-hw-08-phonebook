import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/Auth/AuthOperation';
import { selectAuthUser, selectIsOnline } from '../../redux/Auth/AuthSelector';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isOnline = useSelector(selectIsOnline);
  const { name } = useSelector(selectAuthUser);
  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return isOnline ? (
    <div>
      <p>Hello, {name}</p>
      <button onSubmit={handleLogout}></button>
    </div>
  ) : (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default UserMenu;
