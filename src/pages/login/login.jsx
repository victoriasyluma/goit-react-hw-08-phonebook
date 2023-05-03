import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/Auth/AuthOperation';

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

  // add validation for error and loading state

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login page</h1>
        <input name="email" type="email" placeholder="Email..." />
        <input name="password" type="password" placeholder="Password..." />
      </form>
    </div>
  );
};

export default Login;
