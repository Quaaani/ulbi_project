import { FC, useState } from 'react'
import { classNames } from 'shared/lib/helpers'
import { Button } from 'shared/ui'
import ArrowRightIcon from 'shared/assets/icons/arrow-right.svg'
import ArrowLeftIcon from 'shared/assets/icons/arrow-left.svg'
import { LanguageSwitcher, ThemeSwitcher } from 'widgets'

import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props

  const [isCollapsed, setIsCollapsed] = useState(true)

  const onToggle = () => {
    setIsCollapsed((prev) => !prev)
  }

  return (
    <div
      className={classNames(
        cls.sidebar,
        { [cls['is-collapsed']]: isCollapsed },
        [className],
      )}
    >
      <Button onClick={onToggle}>
        {isCollapsed ? (
          <ArrowRightIcon className={cls.icon} />
        ) : (
          <ArrowLeftIcon className={cls.icon} />
        )}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lastIcon} />
      </div>
    </div>
  )
}
