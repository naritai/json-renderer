import { MainLayout } from '@/shared/layout/main-layout';
import { MainPage, NotFoundPage } from '@/pages';
import { routerPaths } from './config';

export const generateRoutes = () => [
	{
		path: routerPaths.main,
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: routerPaths.not_found,
				element: <NotFoundPage />,
			},
		],
	},
];
