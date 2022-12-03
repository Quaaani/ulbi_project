import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames, Mods } from 'shared/lib/helpers'
import { Page } from 'widgets/Page'

import cls from './ArticleEditPage.module.scss'

export interface ArticleEditPageProps {}

export const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { t } = useTranslation('articleEditPage')
  const { articleId } = useParams<{ articleId: string }>()
  const isEdit = Boolean(articleId)

  const mods: Mods = {}
  return <Page className={classNames(cls.articleEditPage, mods)}>{isEdit ? `Edit Article Page ID: ${articleId}` : 'New Article Page'}</Page>
}

export default memo(ArticleEditPage)
