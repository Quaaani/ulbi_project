import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './Avatar.module.scss'

import { classNames, Mods } from '@/shared/lib/helpers'


export enum AvatarSize {
  SMALL = 'small',
  LARGE = 'large',
}

export interface AvatarProps {
  className?: string
  src?: string
  alt: string
  size?: AvatarSize
}

export const Avatar = memo((props: AvatarProps) => {
  const { className, src, alt, size = AvatarSize.SMALL, ...restProps } = props
  const { t } = useTranslation()

  const mods: Mods = {
    [cls.small]: size === AvatarSize.SMALL,
    [cls.large]: size === AvatarSize.LARGE,
  }
  return (
    <img
      data-testid="avatar.test"
      className={classNames(cls.avatar, mods, [className])}
      src={src}
      alt={alt}
      {...restProps}
    />
  )
})
