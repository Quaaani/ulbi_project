import { memo, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Popover as HPopover } from '@headlessui/react'
import { classNames, Mods } from 'shared/lib/helpers'

import { DropdownDirection } from '../../../../types'
import popupCls from '../../styles/Popup.module.scss'

import cls from './Popover.module.scss'

export interface PopoverProps {
  className?: string
  children?: ReactNode
  trigger: ReactNode
  direction?: DropdownDirection
}

export const Popover = memo((props: PopoverProps) => {
  const { className, children, trigger, direction = 'bottom-right' } = props
  const { t } = useTranslation('')

  const mods: Mods = {}
  return (
    <HPopover className={classNames(cls.popover, mods, [className, popupCls.popup])}>
      <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>
      <HPopover.Panel className={classNames(cls.panel, {}, [popupCls[direction]])}>{children}</HPopover.Panel>
    </HPopover>
  )
})
