import { Route, Routes } from 'react-router';
import { Contacts } from './pages/contacts/contacts';
import { Layout } from './components/Layout/Layout';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Home } from './pages/Home/Home';
import { PrivateRoute } from './HOC/PriviteRoute';
import { PublicRoute } from './HOC/PublickRoute';
import { RotatingLines } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from './redux/Auth/AuthOperation';
import { selectIsRefreshing } from './redux/Auth/AuthSelector';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
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
      </Routes>
    </>
  );
};

//  <>
//     <Routes>
//       <Route path="/" element={<Layout />} />
//       <Route index element={<Home />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/contacts" element={<Contacts />} />
//     </Routes>
//   </>
