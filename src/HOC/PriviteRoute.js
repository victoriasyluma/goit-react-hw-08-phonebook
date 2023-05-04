import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsOnline } from '../redux/Auth/AuthSelector';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isOnline = useSelector(selectIsOnline);

  if (!isOnline) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
