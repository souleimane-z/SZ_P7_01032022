import { Outlet } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const RequiredAuth = () => {
  let storage = localStorage.getItem('Token');
  let user = localStorage.getItem('User');

  return storage === null || user === null ? <HomePage /> : <Outlet />;
};

export default RequiredAuth;
