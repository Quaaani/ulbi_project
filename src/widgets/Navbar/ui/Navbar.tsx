import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/helpers'
import { AppLink } from 'shared/ui'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

// Компоненты, которые не нужно помещать в отдельные чанки через lazy load
// имеют именованный экспорт
export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props

  const { t } = useTranslation()

  const obj = {
    hey: 'hello',
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" className={cls.mainLink}>
          {t('Home')}
        </AppLink>
        <AppLink to="/about">{t('About us')}</AppLink>
      </div>
    </div>
  )
}
