import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { About } from 'pages/About';
import { Main } from 'pages/Main';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar, Sidebar } from 'widgets';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
