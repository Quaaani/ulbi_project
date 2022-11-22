import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { AddCommentForm } from 'features/AddCommentForm'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { classNames, Mods } from 'shared/lib/helpers'
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'
import { Text, TextType, TextSize, Button, Page } from 'shared/ui'
import BackIcon from 'shared/assets/icons/back.svg'
import { RoutePath } from 'shared/router'

import { addCommentForArticle } from '../../../ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../../ArticleDetailsPage/model/services'
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
  const navigate = useNavigate()

  const comments = useSelector(getArticleDetailsComments.selectAll)
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading)

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch],
  )

  const onPressBackToArticlesList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId))
  })

  const mods: Mods = {}
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <Page className={classNames(cls.articleDetailsPage, mods)}>
        <Button
          className={cls.backBtn}
          title={t('back-to-articles-list')}
          icon={BackIcon}
          onClick={onPressBackToArticlesList}
        />
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
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
