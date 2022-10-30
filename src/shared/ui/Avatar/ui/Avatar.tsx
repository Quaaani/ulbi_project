import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/helpers'

import cls from './Avatar.module.scss'

export enum AvatarSize {
  SMALL = 'small',
  LARGE = 'large',
}

export interface AvatarProps {
  className?: string
  src: string
  alt: string
  size?: AvatarSize
}

export const Avatar = memo((props: AvatarProps) => {
  const { className, src, alt, size = AvatarSize.SMALL, ...restProps } = props
  const { t } = useTranslation()

  const mods: Record<string, boolean> = {
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
