import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registrationThunk } from '../../redux/Auth/AuthOperation';
import { selectAuthIsLoading } from '../../redux/Auth/AuthSelector';

export const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);

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
      <form onSubmit={handleSubmit}>
        <h1>Register page</h1>
        <input
          name="name"
          type="text"
          pattern=".{3,}"
          title="Name must be more than 3 letters"
          placeholder="Name..."
        />
        <input
          name="email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Email must be like this: email@example.com"
          placeholder="Email..."
        />
        <input
          name="password"
          type="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Password must be at least 8 characters long, contain at least 1 uppercase letter, 1 lowercase letter and 1 number"
          placeholder="Password..."
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
