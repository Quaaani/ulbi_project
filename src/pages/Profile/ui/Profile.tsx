import {
  fetchProfileData,
  profileActions,
  profileReducer,
  updateProfileData
} from 'entities/Profile'
import {
  getProfileError, getProfileFormData, getProfileFormFieldError, getProfileIsLoading,
  getProfileReadonly
} from 'entities/Profile/model/selectors/ProfileSelectors'
import { FC, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  Country,
  Currency,
  onlyNumbersRegExp
} from 'shared/const'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { Mods } from 'shared/lib/helpers'
import { useAppDispatch } from 'shared/lib/hooks'

import { ProfileForm } from './ProfileForm'

const reducers: ReducersList = {
  profile: profileReducer,
}

export interface ProfileProps {
  className?: string
}

const Profile: FC<ProfileProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileFormData)
  const readonly = useSelector(getProfileReadonly)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const formFieldErrors = useSelector(getProfileFormFieldError)

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
    (value: string) => {
      // TODO: Add validation
      dispatch(profileActions.updateProfile({ countryIso: value as Country }))
    },
    [dispatch],
  )

  const onChangeCurrency = useCallback(
    (value: string) => {
      // TODO: Add validation
      dispatch(profileActions.updateProfile({ currencyIso: value as Currency }))
    },
    [dispatch],
  )

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const mods: Mods = {}

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <ProfileForm
        formData={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        formFieldErrors={formFieldErrors}
        onEdit={onEdit}
        onSave={onSave}
        onCancel={onCancel}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCountry={onChangeCountry}
        onChangeCurrency={onChangeCurrency}
      />
    </DynamicModuleLoader>
  )
}

export default Profile
function updateProfile(): any {
  throw new Error('Function not implemented.')
}
