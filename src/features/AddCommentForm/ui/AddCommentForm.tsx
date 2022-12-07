import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader } from 'shared/lib/components'
import { classNames, Mods } from 'shared/lib/helpers'
import { useAppDispatch } from 'shared/lib/hooks'
import { Button } from 'shared/ui/Button'
import { FormBlock } from 'shared/ui/FormBlock'
import { Input } from 'shared/ui/Input'

import { getAddCommentFormText } from '../model/selectors/addCommentFormSelectors'
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentFormSlice'

import cls from './AddCommentForm.module.scss'

import type { ReducersList } from 'shared/lib/components'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const text = useSelector(getAddCommentFormText)

  const onChangeCommentText = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value))
    },
    [dispatch],
  )

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onChangeCommentText('')
  }, [onChangeCommentText, onSendComment, text])

  const mods: Mods = {}
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <FormBlock data-testid="addCommentForm.test" className={classNames(cls.addCommentForm, mods, [className])}>
        <Input placeholder={t('add-comment')} value={text} onChange={onChangeCommentText} />
        <Button title={t('send')} onClick={onSendHandler} />
      </FormBlock>
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
