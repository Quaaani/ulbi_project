import {
  Profile,
  ProfileFormFieldErrors,
} from 'entities/Profile/model/types/profileSchema'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'
import { Input } from 'shared/ui'

import cls from './ProfileCard.module.scss'

export interface ProfileCardProps {
  className?: string
  formData?: Profile
  readonly?: boolean
  formFieldErrors?: ProfileFormFieldErrors
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCountry?: (value: string) => void
  onChangeCurrency?: (value: string) => void
  onChangeAvatar?: (value: string) => void
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className,
    formData,
    readonly,
    formFieldErrors,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCountry,
    onChangeCurrency,
    onChangeAvatar
  } = props
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
        <Input
          readonly={readonly}
          value={formData?.age}
          errorMessage={formFieldErrors?.age}
          placeholder={t('your-age')}
          onChange={onChangeAge}
        />
        <Input
          readonly={readonly}
          value={formData?.countryIso}
          placeholder={t('your-country')}
          onChange={onChangeCountry}
        />
        <Input
          readonly={readonly}
          value={formData?.currencyIso}
          placeholder={t('currency')}
          onChange={onChangeCurrency}
        />
        <Input
          readonly={readonly}
          value={formData?.avatar}
          placeholder={t('avatar')}
          onChange={onChangeAvatar}
        />
      </div>
    </div>
  )
})
