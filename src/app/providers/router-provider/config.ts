export enum AppRoutes {
  MAIN = 'main',
  NOT_FOUND = 'not_found',
}

export const routerPaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: `/`,
	[AppRoutes.NOT_FOUND]: '*',
};
