import { Main, About, Profile, NotFound } from 'pages'
import { RouteProps } from 'react-router-dom'
import { RoutePath } from 'shared/router'

type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export const routeConfig: AppRoutesProps[] = [
  {
    path: RoutePath.main,
    element: <Main />,
  },
  {
    path: RoutePath.about,
    element: <About />,
  },
  {
    path: RoutePath.profile,
    element: <Profile />,
    authOnly: true,
  },
  {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
]
