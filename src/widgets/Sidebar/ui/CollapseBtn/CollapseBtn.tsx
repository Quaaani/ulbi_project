import { memo } from 'react'

import cls from './CollapseBtn.module.scss'

import { classNames, Mods } from '@/shared/lib/helpers'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import ArrowRightIcon from '@/shared/assets/icons/arrow-right.svg'
import ArrowLeftIcon from '@/shared/assets/icons/arrow-left.svg'


interface CollapseBtnProps {
  className?: string
  isCollapsed: boolean
  onToggle: () => void
}

export const CollapseBtn = memo((props: CollapseBtnProps) => {
  const { className, isCollapsed, onToggle } = props

  const Icon = isCollapsed ? ArrowRightIcon : ArrowLeftIcon

  const mods: Mods = {}
  return (
    <div data-testid="collapseBtn.test" className={classNames(cls.collapseBtn, mods, [className])}>
      <Button data-testid="toggle.test" className={cls.btnBorder} icon={Icon} theme={ButtonTheme.CIRCLE} onClick={onToggle} />
    </div>
  )
})
