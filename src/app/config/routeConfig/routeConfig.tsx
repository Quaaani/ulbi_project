import {
  MainPage,
  AboutPage,
  ProfilePage,
  NotFoundPage,
  ArticleDetailsPage,
  ArticlesPage,
} from 'pages'
import { RouteProps } from 'react-router-dom'
import { RoutePath } from 'shared/router'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export const routeConfig: AppRoutesProps[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  {
    path: RoutePath.article_details,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
]
