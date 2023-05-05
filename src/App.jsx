import { Route, Routes } from 'react-router';
import { Contacts } from './pages/contacts/contacts';
import { Layout } from './components/Layout/Layout';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Home } from './pages/Home/Home';
import { PrivateRoute } from './HOC/PriviteRoute';
import { NoLoggedInRoute } from './HOC/NoLoggedInRoute';
import { RotatingLines } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from './redux/Auth/AuthOperation';
import {
  selectIsRefreshing,
  selectIsLoggedIn,
  selectAuthError,
} from './redux/Auth/AuthSelector';
import { useLocation } from 'react-router-dom';

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  const isAuthError = useSelector(selectAuthError);
  const isUserRegistrate = location.pathname === '/';

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  if (isRefreshing) {
    return (
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/register"
            element={
              <NoLoggedInRoute>
                <Register />
              </NoLoggedInRoute>
            }
          />

          <Route
            path="/login"
            element={
              <NoLoggedInRoute>
                <Login />
              </NoLoggedInRoute>
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />

          <Route path="*" element={isLoggedIn ? <Contacts /> : <Login />} />
        </Route>
      </Routes>
    </>
  );
};
