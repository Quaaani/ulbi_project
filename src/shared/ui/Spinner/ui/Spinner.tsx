import { FC } from 'react'

import { classNames } from '@/shared/lib/helpers'
import './Spinner.scss'

interface SpinnerProps {
  className?: string
}

export const Spinner: FC<SpinnerProps> = (props) => {
  const { className } = props

  return (
    <div className={classNames('lds-roller', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
