import { InputHTMLAttributes, memo, ChangeEvent, useState, useEffect, useRef } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'

import EyeIcon from '../../../assets/icons/eye.svg'
import EyeClosedIcon from '../../../assets/icons/eye-closed.svg'

import cls from './Input.module.scss'

// Omit забирает из указанного типа все пропсы, но исключает те, которые мы укажем 2 аргументом
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'max'>

export interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  autofocus?: boolean
  errorMessage?: string
  readonly?: boolean
  max?: boolean
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const { children, className, type = 'text', value, placeholder, autofocus, errorMessage, readonly, max, onChange, ...restProps } = props

  const [inputIsFocused, setInputIsFocused] = useState(false)
  const [inputIsFilled, setInputIsFilled] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  const onFocus = () => {
    setInputIsFocused(true)
  }

  const onBlur = () => {
    setInputIsFocused(false)
  }

  useEffect(() => {
    if (autofocus) {
      setInputIsFocused(true)
      inputRef.current?.focus()
    }

    if (value) {
      setInputIsFilled(true)
    }

    if (!value) {
      setInputIsFilled(false)
    }
  }, [value, autofocus])

  const mods: Mods = {
    [cls.max]: max,
  }
  const placeholderMods: Mods = {
    [cls.placeholderIsFocused]: inputIsFocused,
    [cls.placeholderIsFilled]: inputIsFilled,
    [cls.placeholderError]: !!errorMessage,
  }
  const customInputMods: Mods = {
    [cls.customInputIsFilled]: inputIsFilled,
    [cls.customInputIsFocused]: inputIsFocused,
    [cls.customInputError]: !!errorMessage,
    [cls.readonly]: readonly,
  }

  return (
    <div data-testid="input.test" className={classNames(cls.input, mods, [className])}>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        className={classNames(cls.customInput, customInputMods)}
        onChange={onChangeInput}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        {...restProps}
      />
      {(inputIsFocused || inputIsFilled) && <div className={classNames(cls.placeholder, placeholderMods)}>{placeholder}</div>}
      {errorMessage && (
        <div data-testid="Input.Error" className={classNames(cls.errorMessage)}>
          {errorMessage}
        </div>
      )}
      {/* TODO: show/hide value for passwords by checking type="password" */}
      {/* <Button
        theme={ButtonTheme.CLEAR}
        className={cls.eyeBtn}
        onClick={showInputToggle}
      >
        <EyeIcon className={cls.icon} />
      </Button> */}
    </div>
  )
})
