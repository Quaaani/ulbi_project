import { Main, About, Profile, NotFound } from 'pages'
import { RouteProps } from 'react-router-dom'
import { RoutePath } from 'shared/router'

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <Main />,
  },
  {
    path: RoutePath.about,
    element: <About />,
  },
  {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
  {
    path: RoutePath.profile,
    element: <Profile />,
  },
]
