import { Route, Routes } from 'react-router';
import { Contacts } from './pages/contacts/contacts';
import { Layout } from './components/Layout/Layout';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Home } from './pages/Home/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};
