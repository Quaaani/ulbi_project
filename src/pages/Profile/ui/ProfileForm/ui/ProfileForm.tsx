import { PathOrFileDescriptor } from 'fs'

import { Profile, ProfileCard, ProfileError } from 'entities/Profile'
import {
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
} from 'entities/Profile/model/selectors/ProfileSelectors'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/helpers'
import { FormBlock, Spinner, Text, TextSize, TextType } from 'shared/ui'

import { ProfileFormHeader } from '../../ProfileFormHeader'

import cls from './ProfileForm.module.scss'

export interface ProfileFormProps {
  className?: string
  formData?: Profile
  isLoading?: boolean
  error?: ProfileError
  readonly?: boolean
  onEdit?: () => void
  onCancel?: () => void
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
}

export const ProfileForm = memo((props: ProfileFormProps) => {
  const {
    className,
    formData,
    isLoading,
    error,
    readonly,
    onEdit,
    onCancel,
    onChangeFirstname,
    onChangeLastname,
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
          <ProfileFormHeader
            readonly={readonly}
            onEdit={onEdit}
            onCancel={onCancel}
          />
          <ProfileCard
            formData={formData}
            readonly={readonly}
            onChangeFirstname={onChangeFirstname}
            onChangeLastname={onChangeLastname}
          />
        </div>
      </FormBlock>
    </div>
  )
})
