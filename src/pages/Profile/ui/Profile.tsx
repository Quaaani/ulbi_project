import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { classNames, Mods } from 'shared/lib/helpers'
import { useAppDispatch } from 'shared/lib/hooks'

import cls from './Profile.module.scss'

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

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const mods: Mods = {}

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div
        data-testid="profile.test"
        className={classNames(cls.profile, mods, [className])}
      >
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
}

export default Profile
