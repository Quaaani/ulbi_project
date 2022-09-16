import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { About } from 'pages/About';
import { Main } from 'pages/Main';
import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme Switch</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>

      <Suspense fallback={<div>...Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/about'} element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
