import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/helpers'
import { Text, TextColor, TextSize } from 'shared/ui'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Login } from 'widgets/Login'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

// Компоненты, которые не нужно помещать в отдельные чанки через lazy load
// имеют именованный экспорт
export const Navbar = memo((props: NavbarProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Text title={t('ulbi-course-app')} size={TextSize.HEADER} color={TextColor.INVERTED} />
      <div className={cls.switchersContainer}>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <Login />
      </div>
    </div>
  )
})
