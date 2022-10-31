import { ProfileFormFieldErrors } from 'entities/Profile'
import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CancelIcon from 'shared/assets/icons/cancel.svg'
import EditIcon from 'shared/assets/icons/edit.svg'
import SaveIcon from 'shared/assets/icons/save.svg'
import { classNames, Mods } from 'shared/lib/helpers'
import { Button, ButtonTheme, Text, TextSize } from 'shared/ui'

import cls from './ProfileFormHeader.module.scss'

export interface ProfileFormHeaderProps {
  className?: string
  readonly?: boolean
  formFieldErrors?: ProfileFormFieldErrors
  onEdit?: () => void
  onSave?: () => void
  onCancel?: () => void
}

export const ProfileFormHeader = memo((props: ProfileFormHeaderProps) => {
  const { className, readonly, formFieldErrors, onEdit, onSave, onCancel } =
    props
  const { t } = useTranslation('profile')

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
              disabled={formFieldHasErrors}
              title={t('save')}
              icon={SaveIcon}
              theme={ButtonTheme.INVERTED}
              onClick={onSave}
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
