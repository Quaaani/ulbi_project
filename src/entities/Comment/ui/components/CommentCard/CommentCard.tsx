import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'
import { Avatar, Text, TextSize } from 'shared/ui'

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
      <div className={cls.header}>
        {comment.user.avatar ? <Avatar src={comment.user.avatar} alt={comment.user.username}/> : null}
        <Text className={cls.username} title={comment.user.username} size={TextSize.LARGE}/>
      </div>
      <Text className={cls.text} title={comment.text} size={TextSize.MEDIUM}/>
    </div>
  )
})
