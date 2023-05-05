import React from 'react';
import { useDispatch } from 'react-redux';
import { registrationThunk } from '../../redux/Auth/AuthOperation';
import styles from './register.module.scss';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(registrationThunk({ name, email, password }));
  };
  return (
    <>
      <div className={styles.div}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1>Register page</h1>
          <input
            className={styles.name}
            name="name"
            type="text"
            pattern=".{3,}"
            title="Name must be more than 3 letters"
            placeholder="Name..."
          />
          <input
            className={styles.email}
            name="email"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Email must be like this: email@example.com"
            placeholder="Email..."
          />
          <input
            className={styles.password}
            name="password"
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Password must be at least 8 characters long, contain at least 1 uppercase letter, 1 lowercase letter and 1 number"
            placeholder="Password..."
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
