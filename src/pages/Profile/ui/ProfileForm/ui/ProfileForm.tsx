import {
  Profile,
  ProfileCard,
  ProfileError,
  ProfileFormFieldErrors,
} from 'entities/Profile'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/helpers'
import {
  Avatar,
  AvatarSize,
  FormBlock,
  Spinner,
  Text,
  TextSize,
  TextType,
} from 'shared/ui'

import { ProfileFormHeader } from '../../ProfileFormHeader'

import cls from './ProfileForm.module.scss'

export interface ProfileFormProps {
  className?: string
  formData?: Profile
  isLoading?: boolean
  error?: ProfileError
  readonly?: boolean
  formFieldErrors?: ProfileFormFieldErrors
  onEdit?: () => void
  onSave?: () => void
  onCancel?: () => void
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCountry?: (value: string) => void
  onChangeCurrency?: (value: string) => void
  onChangeAvatar?: (value: string) => void
}

export const ProfileForm = memo((props: ProfileFormProps) => {
  const {
    className,
    formData,
    isLoading,
    error,
    readonly,
    formFieldErrors,
    onEdit,
    onSave,
    onCancel,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCountry,
    onChangeCurrency,
    onChangeAvatar,
  } = props
  const { t } = useTranslation('profile')

  const mods: Record<string, boolean> = {}

  if (isLoading) {
    return (
      <div
        data-testid="profileform.test"
        className={classNames(cls.profileForm, mods, [className])}
      >
        <FormBlock>
          <div className={cls.contentWrapper}>
            <Spinner />
          </div>
        </FormBlock>
      </div>
    )
  }

  if (error) {
    return (
      <div
        data-testid="profileform.test"
        className={classNames(cls.profileForm, mods, [className])}
      >
        <FormBlock>
          <div className={cls.contentWrapper}>
            <Text title={error} size={TextSize.HEADER} type={TextType.ERROR} />
          </div>
        </FormBlock>
      </div>
    )
  }

  return (
    <div
      data-testid="profileform.test"
      className={classNames(cls.profileForm, mods, [className])}
    >
      <FormBlock>
        <div className={cls.cardWrapper}>
          {formData?.avatar ? (
            <div className={cls.avatarWrapper}>
              <Avatar
                src={formData.avatar}
                alt={t('avatar')}
                size={AvatarSize.LARGE}
              />
            </div>
          ) : null}
          <ProfileFormHeader
            readonly={readonly}
            formFieldErrors={formFieldErrors}
            onEdit={onEdit}
            onSave={onSave}
            onCancel={onCancel}
          />
          <ProfileCard
            formData={formData}
            readonly={readonly}
            formFieldErrors={formFieldErrors}
            onChangeFirstname={onChangeFirstname}
            onChangeLastname={onChangeLastname}
            onChangeAge={onChangeAge}
            onChangeCountry={onChangeCountry}
            onChangeCurrency={onChangeCurrency}
            onChangeAvatar={onChangeAvatar}
          />
        </div>
      </FormBlock>
    </div>
  )
})
