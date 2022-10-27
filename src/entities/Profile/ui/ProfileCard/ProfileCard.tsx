import {
  getProfileData,
  getProfileError,
  getProfileIsLoading,
} from 'entities/Profile/model/selectors/ProfileSelectors'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames, Mods } from 'shared/lib/helpers'
import {
  Button,
  ButtonTheme,
  FormBlock,
  Input,
  Text,
  TextSize,
} from 'shared/ui'
import EditIcon from 'shared/assets/icons/edit.svg'
import SaveIcon from 'shared/assets/icons/save.svg'
import CancelIcon from 'shared/assets/icons/cancel.svg'

import cls from './ProfileCard.module.scss'

export interface ProfileCardProps {
  className?: string
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { className } = props
  const { t } = useTranslation('profile')

  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)

  const mods: Mods = {}
  return (
    <div
      data-testid="profilecard.test"
      className={classNames(cls.profileCard, mods, [className])}
    >
      <FormBlock>
        <div className={cls.cardWrapper}>
          <div className={cls.header}>
            <Text title={t('profile-data')} size={TextSize.HEADER} />
            <div className={cls.btnsWrapper}>
              {0 ? (
                <Button
                  title={t('edit')}
                  icon={EditIcon}
                  theme={ButtonTheme.INVERTED}
                />
              ) : (
                <Button
                  title={t('save')}
                  icon={SaveIcon}
                  theme={ButtonTheme.INVERTED}
                />
              )}
              <Button className={cls.btnLast} icon={CancelIcon} />
            </div>
          </div>
          <div className={cls.content}>
            <Input value={data?.firstName} placeholder={t('your-first-name')} />
            <Input value={data?.lastName} placeholder={t('your-lastname')} />
          </div>
        </div>
      </FormBlock>
    </div>
  )
})
