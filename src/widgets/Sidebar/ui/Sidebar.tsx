import { FC, useState } from 'react'
import { classNames } from 'shared/lib/helpers'
import { AppLink, Button, ThemeButton } from 'shared/ui'
import ArrowRightIcon from 'shared/assets/icons/arrow-right.svg'
import ArrowLeftIcon from 'shared/assets/icons/arrow-left.svg'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/info.svg'
import { RoutePath } from 'shared/router'

import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props

  const [isCollapsed, setIsCollapsed] = useState(true)

  const mods: Record<string, boolean> = {
    [cls.isCollapsed]: isCollapsed,
  }

  const onToggle = () => {
    setIsCollapsed((prev) => !prev)
  }

  return (
    <div
      data-testid="sidebar.test"
      className={classNames(cls.sidebar, mods, [className])}
    >
      <div className={cls.btnWrapper}>
        <Button
          data-testid="toggle.test"
          className={cls.btnBorder}
          theme={ThemeButton.CIRCLE}
          onClick={onToggle}
        >
          {isCollapsed ? (
            <ArrowRightIcon className={cls.icon} />
          ) : (
            <ArrowLeftIcon className={cls.icon} />
          )}
        </Button>
      </div>
      <div className={cls.linksContainer}>
        <AppLink to={RoutePath.main} className={cls.linkWrapper}>
          <HomeIcon className={cls.icon} />
        </AppLink>
        <AppLink to={RoutePath.about} className={cls.linkWrapper}>
          <AboutIcon className={cls.icon} />
        </AppLink>
      </div>
    </div>
  )
}
