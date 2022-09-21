import React, { Suspense } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Navbar, Sidebar } from 'widgets';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
