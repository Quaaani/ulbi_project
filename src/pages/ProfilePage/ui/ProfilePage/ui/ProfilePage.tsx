import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import {
  fetchProfileData,
  profileActions,
  ProfileFormFieldErrorCode,
  profileReducer,
  updateProfileData,
} from 'entities/Profile'
import {
  getProfileError,
  getProfileFormData,
  getProfileFormFieldError,
  getProfileFormFieldErrorCodes,
  getProfileIsLoading,
  getProfileReadonly,
} from 'entities/Profile/model/selectors/ProfileSelectors'
import { FC, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { onlyNumbersRegExp } from 'shared/const'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { Mods } from 'shared/lib/helpers'
import { useAppDispatch } from 'shared/lib/hooks'

import { ProfileForm } from '../../components'

const reducers: ReducersList = {
  profile: profileReducer,
}

export interface ProfileProps {
  className?: string
}

const ProfilePage: FC<ProfileProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('profilePage')
  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileFormData)
  const readonly = useSelector(getProfileReadonly)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const formFieldErrors = useSelector(getProfileFormFieldError)
  const formFieldErrorCodes = useSelector(getProfileFormFieldErrorCodes)

  const formFieldErrorCodeMessages: Record<ProfileFormFieldErrorCode, string> =
    {
      [ProfileFormFieldErrorCode.NO_USER_DATA]: t('no-user-data'),
      [ProfileFormFieldErrorCode.INCORRECT_USER_DATA]: t('incorrect-user-data'),
      [ProfileFormFieldErrorCode.INCORRECT_USER_AGE]: t('incorrect-user-age'),
      [ProfileFormFieldErrorCode.SERVER_ERROR]: t('server-error'),
    }

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData())
    }
  }, [dispatch])

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  const onCancel = useCallback(() => {
    dispatch(profileActions.clearAgeError())
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onChangeFirstname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ firstName: value }))
    },
    [dispatch],
  )

  const onChangeLastname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastName: value }))
    },
    [dispatch],
  )

  const onChangeAge = useCallback(
    (value: string) => {
      if (onlyNumbersRegExp.test(value)) {
        dispatch(profileActions.clearAgeError())
      } else {
        dispatch(profileActions.setAgeError())
      }
      dispatch(profileActions.updateProfile({ age: value }))
    },
    [dispatch],
  )

  const onChangeCountry = useCallback(
    (value: Country) => {
      // TODO: Add validation
      dispatch(profileActions.updateProfile({ countryIso: value }))
    },
    [dispatch],
  )

  const onChangeCurrency = useCallback(
    (value: Currency) => {
      // TODO: Add validation
      dispatch(profileActions.updateProfile({ currencyIso: value }))
    },
    [dispatch],
  )

  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }))
    },
    [dispatch],
  )

  const mods: Mods = {}
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <ProfileForm
        formData={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        formFieldErrors={formFieldErrors}
        formFieldErrorCodes={formFieldErrorCodes}
        formFieldErrorCodeMessages={formFieldErrorCodeMessages}
        onEdit={onEdit}
        onSave={onSave}
        onCancel={onCancel}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCountry={onChangeCountry}
        onChangeCurrency={onChangeCurrency}
        onChangeAvatar={onChangeAvatar}
      />
    </DynamicModuleLoader>
  )
}

export default ProfilePage