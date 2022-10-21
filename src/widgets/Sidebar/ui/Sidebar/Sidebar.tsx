import { memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/helpers'

import { SidebarItemsList } from '../../model/items'
import { CollapseBtn } from '../CollapseBtn/CollapseBtn'
import { SidebarItem } from '../SidebarItem/SidebarItem'

import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props

  const [isCollapsed, setIsCollapsed] = useState(true)

  const onToggle = useCallback(() => {
    setIsCollapsed((prev) => !prev)
  }, [])

  const mods: Record<string, boolean> = {
    [cls.isCollapsed]: isCollapsed,
  }

  return (
    <div
      data-testid="sidebar.test"
      className={classNames(cls.sidebar, mods, [className])}
    >
      <CollapseBtn isCollapsed={isCollapsed} onToggle={onToggle} />
      <div className={cls.linksContainer}>
        {SidebarItemsList.map((linkItem) => (
          <SidebarItem
            key={linkItem.path}
            item={linkItem}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>
    </div>
  )
})
