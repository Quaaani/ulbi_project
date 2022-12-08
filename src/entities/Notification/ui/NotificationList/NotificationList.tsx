import { memo } from 'react'

import { useNotifications } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'

import cls from './NotificationList.module.scss'

import { classNames, Mods } from '@/shared/lib/helpers'
import { Skeleton } from '@/shared/ui/Skeleton'
import { VStack } from '@/shared/ui/Stack'



export interface NotificationListProps {
  className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  })

  const mods: Mods = {}

  if (isLoading) {
    return (
      <VStack max gap="16" className={classNames(cls.notificationList, mods, [className])}>
        <Skeleton width="100%" height="80px" borderRadius="8" />
        <Skeleton width="100%" height="80px" borderRadius="8" />
        <Skeleton width="100%" height="80px" borderRadius="8" />
      </VStack>
    )
  }

  return (
    <VStack max gap="16" className={classNames(cls.notificationList, mods, [className])}>
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  )
})
