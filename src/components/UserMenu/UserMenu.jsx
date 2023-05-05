import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/Auth/AuthOperation';
import {
  selectAuthUser,
  selectIsLoggedIn,
} from '../../redux/Auth/AuthSelector';
import styles from './UserMenu.module.scss';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectAuthUser);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  if (!isLoggedIn) {
    return (
      <div className={styles.user_menu}>
        <NavLink className={styles.login} to="/login">
          Login
        </NavLink>
        <NavLink className={styles.register} to="/register">
          Register
        </NavLink>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p className={styles.name}>Hello, {name}</p>
      <button className={styles.logout_button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
