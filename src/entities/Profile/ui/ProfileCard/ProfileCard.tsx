import { Profile } from 'entities/Profile/model/types/profileSchema'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'
import { Input } from 'shared/ui'

import cls from './ProfileCard.module.scss'

export interface ProfileCardProps {
  className?: string
  formData?: Profile
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { className, formData, readonly,  onChangeFirstname, onChangeLastname } = props
  const { t } = useTranslation('profile')

  const mods: Mods = {}
  return (
    <div
      data-testid="profilecard.test"
      className={classNames(cls.profileCard, mods, [className])}
    >
      <div className={cls.content}>
        <Input
          readonly={readonly}
          value={formData?.firstName}
          placeholder={t('your-first-name')}
          onChange={onChangeFirstname}
        />
        <Input
          readonly={readonly}
          value={formData?.lastName}
          placeholder={t('your-lastname')}
          onChange={onChangeLastname}
        />
      </div>
    </div>
  )
})
