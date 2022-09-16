import React, { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutAsync } from './components/About/About.async';
import { Counter } from './components/Counter/Counter';
import { MainAsync } from './components/Main/Main.async';
import { classNames } from './helpers/classNames/classNames';

import './styles/index.scss';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme Switch</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/counter'}>Counter</Link>
      <Link to={'/about'}>About</Link>

      <Suspense fallback={<div>...Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainAsync />} />
          <Route path={'/counter'} element={<Counter />} />
          <Route path={'/about'} element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
