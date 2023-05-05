import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/Auth/AuthSelector';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.navLink}>
      <NavLink className={styles.home} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className={styles.contacts} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
