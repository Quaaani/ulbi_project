import { useTheme } from 'app/providers/ThemeProvider'
import { memo, ReactNode } from 'react'

import { classNames, Mods } from '../../../lib/helpers'
import { Overlay } from '../../Overlay'
import { Portal } from '../../Portal'

import cls from './Drawer.module.scss'

export interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen } = props
  const { theme } = useTheme()

  const mods: Mods = {
    [cls.opened]: isOpen,
  }

  return (
    <Portal>
      <div className={classNames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClose={onClose}>
          <div className={cls.content}>{children}</div>
        </Overlay>
      </div>
    </Portal>
  )
})
