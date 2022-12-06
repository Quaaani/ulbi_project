import { NotificationList } from 'entities/Notification'
import { memo } from 'react'
import BellIcon from 'shared/assets/icons/bell.svg'
import { classNames, Mods } from 'shared/lib/helpers'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Popover } from 'shared/ui/Popups'

import cls from './NotificationButton.module.scss'

export interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props

  const mods: Mods = {}
  return (
    <Popover
      className={classNames(cls.notificationButton, mods, [className])}
      direction="bottom-left"
      trigger={<Button icon={BellIcon} iconStyle={cls.icon} theme={ButtonTheme.OUTLINE} />}
    >
      <NotificationList />
    </Popover>
  )
})
