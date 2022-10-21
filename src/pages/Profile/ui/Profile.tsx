import { profileReducer } from 'entities/Profile'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { classNames } from 'shared/lib/helpers'

import cls from './Profile.module.scss'

const reducers: ReducersList = {
  profile: profileReducer,
}

export interface ProfileProps {
  className?: string
}

const Profile: FC<ProfileProps> = (props) => {
  const { children, className } = props
  const { t } = useTranslation('profile')

  const mods: Record<string, boolean> = {}

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div
        data-testid="profile.test"
        className={classNames(cls.profile, mods, [className])}
      >
        {t('profile-page')}
      </div>
    </DynamicModuleLoader>
  )
}

export default Profile
