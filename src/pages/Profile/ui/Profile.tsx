import {
  fetchProfileData,
  profileActions,
  profileReducer,
} from 'entities/Profile'
import {
  getProfileFormData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
} from 'entities/Profile/model/selectors/ProfileSelectors'
import { FC, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
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

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstName: value || '' }))
    },
    [dispatch],
  )

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastName: value || '' }))
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
        onEdit={onEdit}
        onCancel={onCancel}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
      />
    </DynamicModuleLoader>
  )
}

export default Profile
