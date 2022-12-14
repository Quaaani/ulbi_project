import { memo, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import cls from './AppLink.module.scss'

import { classNames } from '@/shared/lib/helpers'


export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

  return (
    <Link to={to} className={classNames(cls.appLink, { [cls[theme]]: true }, [className])} {...otherProps}>
      {children}
    </Link>
  )
})
