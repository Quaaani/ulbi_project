import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Icon, Text, TextSize } from 'shared/ui'
import { classNames, Mods } from 'shared/lib/helpers'
import EyeIcon from 'shared/assets/icons/eye.svg'

import { Article, ArticleView } from '../../../../model/types/articleSchema'

import cls from './ArticleListItem.module.scss'

export interface ArticleListItemProps {
  className?: string
  view: ArticleView
  article: Article
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, view, article } = props
  const { t } = useTranslation('articlePage')

  const mods: Mods = {}
  return view === ArticleView.TILE ? (
    <div
      data-testid="articleListItem.test"
      className={classNames(cls.articleListItem, mods, [className, cls[view]])}
    >
      <Card
        renderContent={() => (
          <div className={cls.cardInner}>
            <img className={cls.img} src={article.img} alt={article.title} />
            <div className={cls.infoWrapper}>
              <Text
                className={cls.types}
                title={article.type.join(', ')}
                size={TextSize.LARGE}
              />
              <div className={cls.viewsWrapper}>
                <Text
                  className={cls.views}
                  title={article.views}
                  size={TextSize.LARGE}
                />
                <Icon className={cls.icon} icon={EyeIcon} />
              </div>
            </div>
            <Text className={cls.date} title={article.createdAt} />
            <Text
              className={cls.title}
              title={article.title}
              size={TextSize.HEADER}
            />
          </div>
        )}
      />
    </div>
  ) : (
    <div
      data-testid="articleListItem.test"
      className={classNames(cls.articleListItem, mods, [className, cls[view]])}
    >
      <Card
        renderContent={() => (
          <div className={cls.cardInner}>
            <img className={cls.img} src={article.img} alt={article.title} />
            <div className={cls.infoWrapper}>
              <Text
                className={cls.types}
                title={article.type.join(', ')}
                size={TextSize.LARGE}
              />
              <div className={cls.viewsWrapper}>
                <Text
                  className={cls.views}
                  title={article.views}
                  size={TextSize.LARGE}
                />
                <Icon className={cls.icon} icon={EyeIcon} />
              </div>
            </div>
            <Text className={cls.date} title={article.createdAt} />
            <Text
              className={cls.title}
              title={article.title}
              size={TextSize.HEADER}
            />
          </div>
        )}
      />
    </div>
  )
})
