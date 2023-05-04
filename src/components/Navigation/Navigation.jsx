import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles.navLink}>
      <NavLink className={styles.home} to="/">
        Home
      </NavLink>
      <NavLink className={styles.contacts} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};
