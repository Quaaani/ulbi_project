import {
  InputHTMLAttributes,
  memo,
  ChangeEvent,
  useState,
  useEffect,
  useRef,
} from 'react'
import { classNames } from 'shared/lib/helpers'
import { Button, ButtonTheme } from 'shared/ui/Button'

import EyeIcon from '../../../assets/icons/eye.svg'
import EyeClosedIcon from '../../../assets/icons/eye-closed.svg'

import cls from './Input.module.scss'

// Omit забирает из указанного типа все пропсы, но исключает те, которые мы укажем 2 аргументом
type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  autofocus?: boolean
  errorMessage?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    children,
    className,
    type = 'text',
    value,
    placeholder,
    autofocus,
    errorMessage,
    onChange,
    ...restProps
  } = props

  const [inputIsFocused, setInputIsFocused] = useState(false)
  const [inputIsFilled, setInputIsFilled] = useState(false)

  const inputRef = useRef<HTMLInputElement>()

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

  const mods: Record<string, boolean> = {}
  const placeholderMods: Record<string, boolean> = {
    [cls.placeholderIsFocused]: inputIsFocused,
    [cls.placeholderIsFilled]: inputIsFilled,
    [cls.placeholderError]: !!errorMessage,
  }
  const customInputMods: Record<string, boolean> = {
    [cls.customInputIsFilled]: inputIsFilled,
    [cls.customInputIsFocused]: inputIsFocused,
    [cls.customInputError]: !!errorMessage,
  }

  return (
    <div
      data-testid="input.test"
      className={classNames(cls.input, mods, [className])}
      {...restProps}
    >
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        className={classNames(cls.customInput, customInputMods)}
        onChange={onChangeInput}
        onFocus={onFocus}
        onBlur={onBlur}
        {...restProps}
      />
      {(inputIsFocused || inputIsFilled) && (
        <div className={classNames(cls.placeholder, placeholderMods)}>
          {placeholder}
        </div>
      )}
      {errorMessage && (
        <div className={classNames(cls.errorMessage)}>{errorMessage}</div>
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