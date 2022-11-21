import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Avatar,
  Button,
  ButtonTheme,
  Card,
  Icon,
  Text,
  TextSize,
} from 'shared/ui'
import { classNames, Mods } from 'shared/lib/helpers'
import EyeIcon from 'shared/assets/icons/eye.svg'
import { generatePath, useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/router'

import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../../../model/types/articleSchema'
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent'

import cls from './ArticleListItem.module.scss'

export interface ArticleListItemProps {
  className?: string
  view: ArticleView
  article: Article
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, view, article } = props
  const { t } = useTranslation('articlesPage')
  const navigate = useNavigate()
  const articlePath = generatePath(RoutePath.article_details, {
    articleId: article.id,
  })

  const onOpenArticle = useCallback(() => {
    navigate(articlePath)
  }, [articlePath, navigate])

  const textBlock = article.blocks.find(
    (block) => block.type === ArticleBlockType.TEXT,
  ) as ArticleTextBlock

  const types = (
    <Text
      className={cls.types}
      title={article.type.join(', ')}
      size={TextSize.LARGE}
    />
  )
  const title = (
    <Text className={cls.title} title={article.title} size={TextSize.HEADER} />
  )
  const date = <Text className={cls.date} title={article.createdAt} />
  const views = (
    <div className={cls.viewsWrapper}>
      <Text className={cls.views} title={article.views} size={TextSize.LARGE} />
      <Icon className={cls.icon} icon={EyeIcon} />
    </div>
  )

  const mods: Mods = {}
  return view === ArticleView.TILE ? (
    <div
      data-testid="articleListItem.test"
      className={classNames(cls.articleListItemTileView, mods, [
        className,
        cls[view],
      ])}
    >
      <Card
        renderContent={() => (
          <div className={cls.cardInner}>
            <img className={cls.img} src={article.img} alt={article.title} />
            <div className={cls.infoWrapper}>
              {types}
              {views}
            </div>
            {date}
            {title}
          </div>
        )}
        onClick={onOpenArticle}
      />
    </div>
  ) : (
    <div
      data-testid="articleListItem.test"
      className={classNames(cls.articleListItemListView, mods, [
        className,
        cls[view],
      ])}
    >
      <Card
        renderContent={() => (
          <div className={cls.cardInner}>
            <div className={cls.header}>
              <div className={cls.userInfoWrapper}>
                <Avatar src={article.user.avatar} alt={article.user.username} />
                <Text className={cls.username} title={article.user.username} />
              </div>
              {date}
            </div>
            <div className={cls.infoWrapper}>
              {title}
              {types}
            </div>
            <img className={cls.img} src={article.img} alt={article.title} />
            <div className={cls.textWrapper}>
              {textBlock ? (
                <ArticleTextBlockComponent block={textBlock} />
              ) : null}
            </div>
            <div className={cls.footer}>
              <Button
                title={t('read-more')}
                theme={ButtonTheme.INVERTED}
                onClick={onOpenArticle}
              />
              {views}
            </div>
          </div>
        )}
      />
    </div>
  )
})
