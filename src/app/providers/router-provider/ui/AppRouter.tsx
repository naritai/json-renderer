import { useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import { PageLoader } from '@/shared/layout/page-loader';
import { generateRoutes } from '../routes';

export const AppRouter = () => {
  const routes = useRoutes(generateRoutes());
  return <Suspense fallback={<PageLoader />}>{routes}</Suspense>;
};
