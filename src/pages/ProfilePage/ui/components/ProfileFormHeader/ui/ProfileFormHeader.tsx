import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import cls from './ProfileFormHeader.module.scss'

import type { ProfileFormFieldErrors } from '@/entities/Profile'

import { getProfileData } from '@/entities/Profile/model/selectors/ProfileSelectors'
import { getUserAuthData } from '@/entities/User'
import CancelIcon from '@/shared/assets/icons/cancel.svg'
import EditIcon from '@/shared/assets/icons/edit.svg'
import SaveIcon from '@/shared/assets/icons/save.svg'
import { classNames, Mods } from '@/shared/lib/helpers'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Text, TextSize } from '@/shared/ui/Text'



export interface ProfileFormHeaderProps {
  className?: string
  readonly?: boolean
  formFieldErrors?: ProfileFormFieldErrors
  onEdit?: () => void
  onSave?: () => void
  onCancel?: () => void
}

export const ProfileFormHeader = memo((props: ProfileFormHeaderProps) => {
  const { className, readonly, formFieldErrors, onEdit, onSave, onCancel } = props
  const { t } = useTranslation('profilePage')

  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id

  const [formFieldHasErrors, setFormFieldHasErrors] = useState(false)

  useEffect(() => {
    if (formFieldErrors) {
      const formFieldErrorsValues = Object.values(formFieldErrors).filter(Boolean)

      if (formFieldErrorsValues.length) {
        setFormFieldHasErrors(true)
      } else {
        setFormFieldHasErrors(false)
      }
    }
  }, [formFieldErrors, formFieldHasErrors])

  const mods: Mods = {}
  return (
    <div data-testid="ProfileFormHeader" className={classNames(cls.profileFormHeader, mods, [className])}>
      <Text title={t('profile-data')} size={TextSize.HEADER} />
      {canEdit ? (
        <div className={cls.btnsWrapper}>
          {readonly ? (
            <Button data-testid="ProfileFormHeader.EditBtn" title={t('edit')} icon={EditIcon} theme={ButtonTheme.INVERTED} onClick={onEdit} />
          ) : (
            <>
              <Button
                data-testid="ProfileFormHeader.SaveBtn"
                disabled={formFieldHasErrors}
                title={t('save')}
                icon={SaveIcon}
                theme={ButtonTheme.INVERTED}
                onClick={onSave}
              />
              <Button data-testid="ProfileFormHeader.CancelBtn" className={cls.btnLast} icon={CancelIcon} onClick={onCancel} />
            </>
          )}
        </div>
      ) : null}
    </div>
  )
})
