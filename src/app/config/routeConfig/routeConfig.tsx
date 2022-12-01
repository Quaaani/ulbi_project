import { RouteProps } from 'react-router-dom'
import { RoutePath } from 'shared/router'
import { AboutPage } from 'pages/AboutPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticleEditPage } from 'pages/ArticleEditPage'
import { AdminPanelPage } from 'pages/AdminPanelPage'
import { UserRole } from 'entities/User'
import { ForbiddenPage } from 'pages/ForbiddenPage'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}

export const routeConfig: AppRoutesProps[] = [
  {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
  },
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
  {
    path: RoutePath.article_create,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: RoutePath.article_edit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: RoutePath.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
]
