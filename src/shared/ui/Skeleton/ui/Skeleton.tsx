import { CSSProperties, memo } from 'react'

import cls from './Skeleton.module.scss'

import { classNames, Mods } from '@/shared/lib/helpers'


export interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  borderRadius?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, borderRadius } = props

  const styles: CSSProperties = {
    height,
    width,
    borderRadius,
  }

  const mods: Mods = {}
  return (
    <div 
      data-testid='skeleton.test'
      className={classNames(cls.skeleton, mods, [className])}
      style={styles}
     />
  )
})
