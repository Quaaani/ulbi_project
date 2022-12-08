import { memo, useCallback } from 'react'


import { Button, ButtonTheme } from '../../Button'
import CopyIcon from '../../../assets/icons/copy.svg'

import cls from './Code.module.scss'

import { classNames, Mods } from '@/shared/lib/helpers'

export interface CodeProps {
  className?: string
  codeValue: string
}

export const Code = memo((props: CodeProps) => {
  const { className, codeValue } = props

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(codeValue)
  }, [codeValue])

  const mods: Mods = {}
  return (
    <pre
      data-testid="code.test"
      className={classNames(cls.code, mods, [className])}
    >
      <Button className={cls.copyBtn} icon={CopyIcon} theme={ButtonTheme.CLEAR} onClick={onCopy} />
      <code>{codeValue}</code>
    </pre>
  )
})
