import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button } from 'shared/ui';
import cls from './LanguageSwitcher.module.scss';
import TranslationIcon from 'shared/assets/icons/translation.svg';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { className } = props;

  const { i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      className={classNames(cls.LanguageSwitcher, {}, [className])}
      onClick={toggle}
    >
      <TranslationIcon className={cls.icon} />
    </Button>
  );
};