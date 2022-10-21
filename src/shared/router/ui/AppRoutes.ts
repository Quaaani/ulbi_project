export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  // 404
  NOTFOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',

  // Охватывет все маршруты, если ни один из маршрутов выше не отработал
  [AppRoutes.NOTFOUND]: '*',
}
