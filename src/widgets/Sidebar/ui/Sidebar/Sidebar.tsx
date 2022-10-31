import { memo, useCallback, useState, useMemo } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'

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

  const itemsList = useMemo(
    () =>
      SidebarItemsList.map((linkItem) => (
        <SidebarItem
          key={linkItem.path}
          item={linkItem}
          isCollapsed={isCollapsed}
        />
      )),
    [isCollapsed],
  )

  const mods: Mods = {
    [cls.isCollapsed]: isCollapsed,
  }
  return (
    <div
      data-testid="sidebar.test"
      className={classNames(cls.sidebar, mods, [className])}
    >
      <CollapseBtn isCollapsed={isCollapsed} onToggle={onToggle} />
      <div className={cls.linksContainer}>{itemsList}</div>
    </div>
  )
})
