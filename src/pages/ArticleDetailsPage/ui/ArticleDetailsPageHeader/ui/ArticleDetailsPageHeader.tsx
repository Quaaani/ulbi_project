import { getArticleDetailsData } from 'entities/Article'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { generatePath, useNavigate } from 'react-router-dom'
import BackIcon from 'shared/assets/icons/back.svg'
import EditIcon from 'shared/assets/icons/edit.svg'
import { classNames, Mods } from 'shared/lib/helpers'
import { RoutePath } from 'shared/router'
import { Button } from 'shared/ui'

import { getCanEditArticle } from '../../../model/selectors/articleSelector'

import cls from './ArticleDetailsPageHeader.module.scss'

export interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props
  const { t } = useTranslation('articleDetailsPage')
  const navigate = useNavigate()
  const article = useSelector(getArticleDetailsData)
  const canEdit = useSelector(getCanEditArticle)

  const editPath = generatePath(RoutePath.article_edit, {
    articleId: article?.id ? article.id : '',
  })

  const onPressBackToArticlesList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onPressEditArticle = useCallback(() => {
    navigate(editPath)
  }, [editPath, navigate])

  const mods: Mods = {}
  return (
    <div
      data-testid="articleDetailsPageHeader.test"
      className={classNames(cls.articleDetailsPageHeader, mods, [className])}
    >
      <Button
        className={cls.backBtn}
        title={t('back-to-articles-list')}
        icon={BackIcon}
        onClick={onPressBackToArticlesList}
      />
      {canEdit ? (
        <Button className={cls.editBtn} title={t('edit-0')} icon={EditIcon} onClick={onPressEditArticle} />
      ) : null}
    </div>
  )
})
