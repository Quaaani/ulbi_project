import { CountrySelect, Country } from 'entities/Country'
import { CurrencySelect, Currency } from 'entities/Currency'
import {
  Profile,
  ProfileFormFieldErrorCode,
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
  formFieldErrorCodes?: ProfileFormFieldErrorCode[]
  formFieldErrorCodeMessages?: Record<ProfileFormFieldErrorCode, string>
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCountry?: (value: Country) => void
  onChangeCurrency?: (value: Currency) => void
  onChangeAvatar?: (value: string) => void
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className,
    formData,
    readonly,
    formFieldErrors,
    formFieldErrorCodes,
    formFieldErrorCodeMessages,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCountry,
    onChangeCurrency,
    onChangeAvatar,
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
          value={formData?.avatar}
          placeholder={t('avatar')}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          readonly={readonly}
          value={formData?.currencyIso}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          readonly={readonly}
          value={formData?.countryIso}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  )
})
