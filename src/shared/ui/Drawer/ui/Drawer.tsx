import { useTheme } from 'app/providers/ThemeProvider'
import { memo, ReactNode } from 'react'
import { useModal } from 'shared/lib/hooks'

import { classNames, Mods } from '../../../lib/helpers'
import { Overlay } from '../../Overlay'
import { Portal } from '../../Portal'

import cls from './Drawer.module.scss'

export interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  lazy?: boolean
  onClose: () => void
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, isOpen, lazy, onClose } = props
  const { theme } = useTheme()
  const { isClosing, isMounted, close } = useModal({
    onClose,
    isOpen,
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClose={close}>
          <div className={cls.content}>{children}</div>
        </Overlay>
      </div>
    </Portal>
  )
})
