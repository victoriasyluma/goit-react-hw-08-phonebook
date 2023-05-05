import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/Auth/AuthOperation';
import styles from './login.module.scss';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(loginThunk({ email, password }));

    form.reset();
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Login page</h1>
        <input
          className={styles.name}
          name="email"
          type="email"
          placeholder="Email..."
        />
        <input
          className={styles.password}
          name="password"
          type="password"
          placeholder="Password..."
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
