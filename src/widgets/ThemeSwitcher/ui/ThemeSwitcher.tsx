import { Theme, useTheme } from 'app/providers/ThemeProvider';
import React, { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightThemeIcon from 'shared/assets/icons/light-theme.svg';
import DarkThemeIcon from 'shared/assets/icons/dark-theme.svg';
import { Button } from 'shared/ui';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? (
        <DarkThemeIcon className={cls.icon} />
      ) : (
        <LightThemeIcon className={cls.icon} />
      )}
    </Button>
  );
};
