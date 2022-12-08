import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getArticleDetailsComments } from '../../../model/slice/articleDetailsCommentsSlice'
import { addCommentForArticle, fetchCommentsByArticleId } from '../../../model/services'
import { getArticleDetailsCommentsIsLoading } from '../../../model/selectors'

import { CommentList } from '@/entities/Comment'
import { AddCommentForm } from '@/features/AddCommentForm'
import { classNames, Mods } from '@/shared/lib/helpers'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import { Text, TextSize } from '@/shared/ui/Text'
import { VStack } from '@/shared/ui/Stack'


export interface ArticleDetailsCommentsProps {
  className?: string
  articleId: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className, articleId } = props
  const { t } = useTranslation('articleDetailsPage')
  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleDetailsComments.selectAll)
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading)

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId))
  })

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch],
  )

  const mods: Mods = {}
  return (
    <VStack max className={classNames('', mods, [className])} gap="8">
      <Text title={t('Comments')} size={TextSize.HEADER} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </VStack>
  )
})
