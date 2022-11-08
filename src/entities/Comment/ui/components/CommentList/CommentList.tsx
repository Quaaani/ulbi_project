import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'
import { Text } from 'shared/ui'

import { Comment } from '../../../model/types/commentSchema'
import { CommentCard } from '../CommentCard/CommentCard'

import cls from './CommentList.module.scss'

export interface CommentListProps {
  className?: string
  isLoading?: boolean
  comments?: Comment[]
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, isLoading, comments } = props
  const { t } = useTranslation()

  const mods: Mods = {}
  return (
    <div
      data-testid="commentList.test"
      className={classNames(cls.commentList, mods, [className])}
    >
      {comments?.length ? (
        comments.map((comment) => <CommentCard className={cls.comment} comment={comment} />)
      ) : (
        <Text title={t('no-comments')} />
      )}
    </div>
  )
})
