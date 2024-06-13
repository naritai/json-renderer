import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <main className={styles.main}>
      <Suspense fallback={'loading...'}>
        <Outlet />
      </Suspense>
    </main>
  );
};
