import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/Auth/AuthOperation';
import styles from './login.module.scss';
import { Layout } from '../../components/Layout/Layout';
// import { selectAuthIsLoading } from '../../redux/Auth/AuthSelector';
// import { RotatingLines } from 'react-loader-spinner';

export const Login = () => {
  const dispatch = useDispatch();

  // const isLoading = useSelector(selectAuthIsLoading);

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
    // <>
    //   {isLoading ? (
    //     <RotatingLines
    //       strokeColor="grey"
    //       strokeWidth="5"
    //       animationDuration="0.75"
    //       width="96"
    //       visible={true}
    //     />
    // ) : (
    <>
      <Layout />
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
    </>
  );
};
// </>
//   );
// };

export default Login;
