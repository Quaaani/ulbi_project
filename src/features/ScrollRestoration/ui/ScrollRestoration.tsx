import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './ScrollRestoration.module.scss'

export interface ScrollRestorationProps {
  className?: string
}

export const ScrollRestoration = memo((props: ScrollRestorationProps) => {
  const { className } = props
  const { t } = useTranslation('')

  const mods: Mods = {}
  return (
    <div
      data-testid="scrollRestoration.test"
      className={classNames(cls.scrollRestoration, mods, [className])}
    >
      ScrollRestoration
    </div>
  )
})
