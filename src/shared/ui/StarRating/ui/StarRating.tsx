import { memo, useState } from 'react'

import { Icon } from '../../Icon'

import cls from './StarRating.module.scss'

import StarIcon from '@/shared/assets/icons/star.svg'
import { classNames, Mods } from '@/shared/lib/helpers'

const stars = [1, 2, 3, 4, 5]

export type StarSize = 'small' | 'medium' | 'large'

export interface StarRatingProps {
  className?: string
  size?: StarSize
  selectedStars?: number
  onSelect?: (starsCount: number) => void
}

export const StarRating = memo((props: StarRatingProps) => {
  const { className, size = 'medium', selectedStars = 0, onSelect } = props
  const [currentStarsCount, setCurrentStarsCount] = useState(0)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setIsSelected(true)
    }
  }

  const mods: Mods = {}
  return (
    <div data-testid="starRating.test" className={classNames(cls.starRating, mods, [className])}>
      {stars.map((star) => (
        <Icon
          key={star}
          className={classNames(cls.icon, { [cls.hovered]: currentStarsCount >= star, [cls.selected]: isSelected }, [cls[size]])}
          icon={StarIcon}
          onClick={onClick(star)}
          onMouseEnter={onHover(star)}
          onMouseLeave={onLeave}
        />
      ))}
    </div>
  )
})
