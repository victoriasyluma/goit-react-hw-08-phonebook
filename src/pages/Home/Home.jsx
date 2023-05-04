import { Layout } from '../../components/Layout/Layout';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.container_home}>
      <Layout />
      <h1>Home page</h1>
    </div>
  );
};
