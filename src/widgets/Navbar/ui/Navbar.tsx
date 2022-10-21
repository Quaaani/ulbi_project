import { memo, useState } from 'react'
import { classNames } from 'shared/lib/helpers'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Login } from 'widgets/Login'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

// Компоненты, которые не нужно помещать в отдельные чанки через lazy load
// имеют именованный экспорт
export const Navbar = memo((props: NavbarProps) => {
  const { className } = props

  const [test, setTest] = useState(0)

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.switchersContainer}>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <Login />
      </div>
    </div>
  )
})
