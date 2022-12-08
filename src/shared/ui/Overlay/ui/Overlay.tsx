import { memo, ReactNode } from 'react'

import cls from './Overlay.module.scss'

import { classNames, Mods } from '@/shared/lib/helpers'


export interface OverlayProps {
  className?: string
  children: ReactNode
  onClose?: () => void
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, children, onClose } = props

  const mods: Mods = {}
  return (
    <div className={classNames(cls.overlay, mods, [className])} onClick={onClose}>
      {children}
    </div>
  )
})
