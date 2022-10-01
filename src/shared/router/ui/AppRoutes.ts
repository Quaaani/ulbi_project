export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOTFOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',

  // Охватывет все маршруты, если ни один из маршрутов выше не отработал
  [AppRoutes.NOTFOUND]: '*',
}
