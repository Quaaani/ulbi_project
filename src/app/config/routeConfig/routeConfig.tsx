import { About } from 'pages/About';
import { Main } from 'pages/Main';
import { RouteProps } from 'react-router-dom';
import { RoutePath } from 'shared/router';

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <Main />,
  },
  {
    path: RoutePath.about,
    element: <About />,
  },
];
