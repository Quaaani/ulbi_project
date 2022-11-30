import { ArticleDetails, ArticleList } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { AddCommentForm } from 'features/AddCommentForm'
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { classNames, Mods } from 'shared/lib/helpers'
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'
import { Text, TextSize, TextType } from 'shared/ui'
import { Page } from 'widgets'

import { fetchCommentsByArticleId, fetchRecommendations } from '../../../ArticleDetailsPage/model/services'
import { addCommentForArticle } from '../../../ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'
import { getArticleDetailsCommentsIsLoading, getArticleDetailsRecommendationsIsLoading } from '../../model/selectors'
import { articleDetailsPageReducer } from '../../model/slice'
import { getArticleDetailsComments } from '../../model/slice/articleDetailsCommentsSlice'
import { getArticleDetailsRecommendations } from '../../model/slice/articleDetailsRecommendationsSlice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader'

import cls from './ArticleDetailsPage.module.scss'

export interface ArticleDetailsProps {}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
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
      <Page className={classNames(cls.articleDetailsPage, mods)}>
        <ArticleDetailsPageHeader />
        {articleId ? (
          <>
            <ArticleDetails articleId={articleId} />
            <ArticleRecommendationsList />
            <Text className={cls.commentTitle} title={t('Comments')} size={TextSize.HEADER} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
          </>
        ) : (
          <Text title={t('article-was-not-found')} type={TextType.ERROR} size={TextSize.HEADER} />
        )}
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
