import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router';
import { UserMenu } from '../UserMenu/UserMenu';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <Navigation className={styles.navigation} />
        <UserMenu className={styles.user_menu} />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
