import { ChangeEvent, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './Select.module.scss'

export interface SelectOption {
  value: string
  content: string
}

export interface SelectProps {
  className?: string
  options: SelectOption[]
  label?: string
  value?: string
  readonly?: boolean
  onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, readonly, onChange } = props
  const { t } = useTranslation()

  const optionsList = useMemo(
    () =>
      options.map((option) => (
        <option key={option.value}>{option.content}</option>
      )),
    [options],
  )

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value)
    },
    [onChange],
  )

  const mods: Mods = {
    [cls.readonly]: readonly,
  }
  return (
    <div
      data-testid="select.test"
      className={classNames(cls.select, mods, [className])}
    >
      {label ? <span className={cls.label}>{label}</span> : null}
      <select
        className={cls.selectWrapper}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  )
})
