import { memo, useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { classNames, Mods } from 'shared/lib/helpers'

import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { CollapseBtn } from '../CollapseBtn/CollapseBtn'
import { SidebarItem } from '../SidebarItem/SidebarItem'

import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props

  const [isCollapsed, setIsCollapsed] = useState(true)
  const sidebarItemList = useSelector(getSidebarItems)

  const onToggle = useCallback(() => {
    setIsCollapsed((prev) => !prev)
  }, [])

  const itemsList = useMemo(
    () =>
      sidebarItemList.map((linkItem) => (
        <SidebarItem
          key={linkItem.path}
          item={linkItem}
          isCollapsed={isCollapsed}
        />
      )),
    [isCollapsed, sidebarItemList],
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
