import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink } from 'shared/ui';
import { ThemeSwitcher } from 'widgets';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

// Компоненты, которые не нужно помещать в отдельные чанки через lazy load
// имеют именованный экспорт
export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" className={cls.mainLink}>
          {t('Home')}
        </AppLink>
        <AppLink to="/about">{t('About us')}</AppLink>
      </div>
    </div>
  );
};
