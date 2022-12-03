import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { generatePath } from 'react-router-dom'
import { classNames, Mods } from 'shared/lib/helpers'
import { RoutePath } from 'shared/router'
import { Text, TextSize } from 'shared/ui/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { Avatar } from 'shared/ui/Avatar'
import { Skeleton } from 'shared/ui/Skeleton'

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
  const path = generatePath(RoutePath.profile, { profileId: comment.user.id })

  const mods: Mods = {}
  return (
    <div data-testid="commentCard.test" className={classNames(cls.commentCard, mods, [className])}>
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
          <AppLink to={path} theme={AppLinkTheme.SECONDARY} className={cls.header}>
            {comment.user.avatar ? <Avatar src={comment.user.avatar} alt={comment.user.username} /> : null}
            <Text className={cls.username} title={comment.user.username} size={TextSize.LARGE} />
          </AppLink>
          <Text className={cls.text} title={comment.text} size={TextSize.MEDIUM} />
        </>
      )}
    </div>
  )
})
