import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'
import { Avatar, Skeleton, Text, TextSize } from 'shared/ui'

import { Comment } from '../../../model/types/commentSchema'

import cls from './CommentCard.module.scss'

export interface CommentCardProps {
  className?: string
  isLoading?: boolean
  comment: Comment
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, isLoading, comment } = props
  const { t } = useTranslation()

  const mods: Mods = {}
  return (
    <div
      data-testid="commentCard.test"
      className={classNames(cls.commentCard, mods, [className])}
    >
      {isLoading ? (
        <>
          <div className={cls.header}>
            <Skeleton width={30} height={30} borderRadius="50%" />
            <Skeleton width={100} height={16} className={cls.username} />
          </div>
          <Skeleton width="100%" height={50} className={cls.text} />
        </>
      ) : (
        <>
          <div className={cls.header}>
            {comment.user.avatar ? (
              <Avatar src={comment.user.avatar} alt={comment.user.username} />
            ) : null}
            <Text
              className={cls.username}
              title={comment.user.username}
              size={TextSize.LARGE}
            />
          </div>
          <Text
            className={cls.text}
            title={comment.text}
            size={TextSize.MEDIUM}
          />
        </>
      )}
    </div>
  )
})
