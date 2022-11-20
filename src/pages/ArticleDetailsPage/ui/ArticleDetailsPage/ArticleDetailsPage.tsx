import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { AddCommentForm } from 'features/AddCommentForm'
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services'
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { classNames, Mods } from 'shared/lib/helpers'
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'
import { Text, TextType, TextSize } from 'shared/ui'

import { getArticleDetailsCommentsIsLoading } from '../../model/selectors'
import {
  articleDetailsCommentsReducer,
  getArticleDetailsComments,
} from '../../model/slice/articleDetailsCommentsSlice'

import cls from './ArticleDetailsPage.module.scss'

export interface ArticleDetailsProps {}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

export const ArticleDetailsPage = (props: ArticleDetailsProps) => {
  const { t } = useTranslation('articleDetailsPage')
  const { articleId } = useParams<{ articleId: string }>()
  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleDetailsComments.selectAll)
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading)

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch],
  )

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId))
  })

  const mods: Mods = {}
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames(cls.articleDetailsPage, mods)}>
        {articleId ? (
          <>
            <ArticleDetails articleId={articleId} />
            <Text
              className={cls.commentTitle}
              title={t('Comments')}
              size={TextSize.HEADER}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
          </>
        ) : (
          <Text
            title={t('article-was-not-found')}
            type={TextType.ERROR}
            size={TextSize.HEADER}
          />
        )}
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
