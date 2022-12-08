import { memo, useState, useCallback } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'

import cls from './NotificationButton.module.scss'

import { NotificationList } from '@/entities/Notification'
import { classNames, Mods } from '@/shared/lib/helpers'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Drawer } from '@/shared/ui/Drawer'
import { Popover } from '@/shared/ui/Popups'
import BellIcon from '@/shared/assets/icons/bell.svg'
import { AnimationProvider } from '@/shared/lib/components'

export interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props

  const [isOpen, setIsOpen] = useState(false)

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const trigger = <Button icon={BellIcon} iconStyle={cls.icon} theme={ButtonTheme.OUTLINE} onClick={onOpenDrawer} />

  const mods: Mods = {}
  return (
    <>
      <BrowserView>
        <Popover className={classNames(cls.notificationButton, mods, [className])} direction="bottom-left" trigger={trigger}>
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  )
})
