import { memo } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'
import { Card, Skeleton } from 'shared/ui'

import { ArticleView } from '../../../../model/types/articleSchema'

import cls from './ArticleListItem.module.scss'

export interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props

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
              <Skeleton width="100%" height={200} borderRadius="5%" />
              <Skeleton className={cls.skeletonTitle} width={130} height={16} />
              <Skeleton className={cls.skeletonTitle} width={150} height={16} />
            </div>
          )}
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
                  <Skeleton width={30} height={30} borderRadius="50%" />
                  <Skeleton className={cls.username} width={150} height={16} />
                </div>
                <Skeleton width={150} height={16} />
              </div>
              <div className={cls.infoWrapper}>
                <Skeleton className={cls.types} width={250} height={26} />
                <Skeleton
                  className={cls.skeletonTitle}
                  width={250}
                  height={26}
                />
              </div>
              <Skeleton className={cls.img} width="100%" height={250} />
              <Skeleton
                className={cls.skeletonTitle}
                width="100%"
                height={120}
              />
              <div className={cls.footer}>
                <Skeleton width={250} height={16} />
                <Skeleton width={250} height={16} />
              </div>
            </div>
          )}
        />
      </div>
    )
  },
)
