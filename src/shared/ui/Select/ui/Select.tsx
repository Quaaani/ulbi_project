import { ChangeEvent, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
  value: T
  content: string
}

export interface SelectProps<T extends string> {
  className?: string
  options: SelectOption<T>[]
  label?: string
  value?: T
  readonly?: boolean
  onChange?: (value: T) => void
}

export const Select = <T extends string>(props: SelectProps<T>) => {
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
      onChange?.(event.target.value as T)
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
}
