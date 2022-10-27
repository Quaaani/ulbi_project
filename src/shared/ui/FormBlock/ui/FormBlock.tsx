import { FC } from 'react'
import { classNames } from 'shared/lib/helpers'

import cls from './FormBlock.module.scss'

export interface FormBlockProps {
  className?: string
}

export const FormBlock: FC<FormBlockProps> = (props) => {
  const { children, className } = props

  const mods: Record<string, boolean> = {}
  return (
    <div
      data-testid="formblock.test"
      className={classNames(cls.formBlock, mods, [className])}
    >
      {children}
    </div>
  )
}
