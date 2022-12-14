import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ProfileFormFieldErrorCode } from '../../model/consts/consts'

import cls from './ProfileCard.module.scss'

import type { Profile, ProfileFormFieldErrors } from '../../model/types/profileSchema'

import { CountrySelect, Country } from '@/entities/Country'
import { CurrencySelect, Currency } from '@/entities/Currency'
import { classNames, Mods } from '@/shared/lib/helpers'
import { Input } from '@/shared/ui/Input'
import { VStack } from '@/shared/ui/Stack'




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

  const { t } = useTranslation('profilePage')

  const mods: Mods = {}
  return (
    <div data-testid="ProfileCard" className={classNames(cls.profileCard, mods, [className])}>
      <VStack max className={cls.content} gap="8">
        <Input
          max
          data-testid="ProfileCard.InputFirstName"
          readonly={readonly}
          value={formData?.firstName}
          placeholder={t('your-first-name')}
          onChange={onChangeFirstname}
        />
        <Input
          max
          data-testid="ProfileCard.InputLastName"
          readonly={readonly}
          value={formData?.lastName}
          placeholder={t('your-lastname')}
          onChange={onChangeLastname}
        />
        <Input
          max
          data-testid="ProfileCard.InputAge"
          readonly={readonly}
          value={formData?.age}
          errorMessage={formFieldErrors?.age}
          placeholder={t('your-age')}
          onChange={onChangeAge}
        />
        <Input max readonly={readonly} value={formData?.avatar} placeholder={t('avatar')} onChange={onChangeAvatar} />
        <CurrencySelect readonly={readonly} value={formData?.currencyIso} onChange={onChangeCurrency} />
        <CountrySelect readonly={readonly} value={formData?.countryIso} onChange={onChangeCountry} />
      </VStack>
    </div>
  )
})
