import { memo } from 'react'

import { Notification } from '../../model/types/notificationSchema'

import cls from './NotificationItem.module.scss'

import { classNames, Mods } from '@/shared/lib/helpers'
import { AppLink } from '@/shared/ui/AppLink'
import { Card } from '@/shared/ui/Card'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextSize } from '@/shared/ui/Text'



export interface NotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props

  const mods: Mods = {}

  const content = (
    <Card
      className={classNames(cls.notificationItem, mods, [className])}
      renderContent={() => (
        <VStack max gap="8">
          <Text size={TextSize.LARGE} title={item.title} />
          <Text size={TextSize.MEDIUM} title={item.description} />
        </VStack>
      )}
    />
  )

  return item.href ? (
    <AppLink to={item.href} target="_blank" className={cls.notificationItem}>
      {content}
    </AppLink>
  ) : (
    content
  )
})
