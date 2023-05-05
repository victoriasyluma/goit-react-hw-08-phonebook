import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/Auth/AuthSelector';

/**
 * Wrapper for not logged in pages, like register and login.
 */
export const NoLoggedInRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const fromPage = location.state?.from.pathname || '/';

  if (isLoggedIn) {
    return <Navigate to={fromPage} />;
  }

  return children;
};
