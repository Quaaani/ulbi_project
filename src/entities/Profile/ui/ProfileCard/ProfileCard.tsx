import {
  getProfileData,
  getProfileError,
  getProfileIsLoading,
} from 'entities/Profile/model/selectors/ProfileSelectors'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/helpers'
import { Button, Input, Text, TextSize } from 'shared/ui'

import cls from './ProfileCard.module.scss'

export interface ProfileCardProps {
  className?: string
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { className } = props
  const { t } = useTranslation('profile')

  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)

  const mods: Record<string, boolean> = {}
  return (
    <div
      data-testid="profilecard.test"
      className={classNames(cls.profileCard, mods, [className])}
    >
      <div className={cls.cardWrapper}>
        <div className={cls.header}>
          <Text size={TextSize.HEADER}>{t('profile-data')}</Text>
          <Button>{t('edit')}</Button>
        </div>
        <div className={cls.content}>
          <Input value={data?.firstName} placeholder={t('your-first-name')} />
          <Input value={data?.lastName} placeholder={t('your-lastname')} />
        </div>
      </div>
    </div>
  )
})
