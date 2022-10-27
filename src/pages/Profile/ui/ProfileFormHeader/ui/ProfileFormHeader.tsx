import { profileActions } from 'entities/Profile'
import { getProfileReadonly } from 'entities/Profile/model/selectors/ProfileSelectors'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import CancelIcon from 'shared/assets/icons/cancel.svg'
import EditIcon from 'shared/assets/icons/edit.svg'
import SaveIcon from 'shared/assets/icons/save.svg'
import { classNames } from 'shared/lib/helpers'
import { useAppDispatch } from 'shared/lib/hooks'
import { Button, ButtonTheme, Text, TextSize } from 'shared/ui'

import cls from './ProfileFormHeader.module.scss'

export interface ProfileFormHeaderProps {
  className?: string
  readonly?: boolean
  onEdit?: () => void
  onCancel?: () => void
}

export const ProfileFormHeader = memo((props: ProfileFormHeaderProps) => {
  const { className, readonly, onEdit, onCancel } = props
  const { t } = useTranslation('profile')

  const mods: Record<string, boolean> = {}
  return (
    <div
      data-testid="profileformheader.test"
      className={classNames(cls.profileFormHeader, mods, [className])}
    >
      <Text title={t('profile-data')} size={TextSize.HEADER} />
      <div className={cls.btnsWrapper}>
        {readonly ? (
          <Button
            title={t('edit')}
            icon={EditIcon}
            theme={ButtonTheme.INVERTED}
            onClick={onEdit}
          />
        ) : (
          <>
            <Button
              title={t('save')}
              icon={SaveIcon}
              theme={ButtonTheme.INVERTED}
            />
            <Button
              className={cls.btnLast}
              icon={CancelIcon}
              onClick={onCancel}
            />
          </>
        )}
      </div>
    </div>
  )
})
