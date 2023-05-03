import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router';
import { UserMenu } from '../UserMenu/UserMenu';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
        <UserMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
