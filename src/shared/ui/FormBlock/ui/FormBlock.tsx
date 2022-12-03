import { ReactNode } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './FormBlock.module.scss'

export interface FormBlockProps {
  children?: ReactNode
  className?: string
}

export const FormBlock = (props: FormBlockProps) => {
  const { children, className } = props

  const mods: Mods = {}
  return (
    <div data-testid="formblock.test" className={classNames(cls.formBlock, mods, [className])}>
      {children}
    </div>
  )
}
