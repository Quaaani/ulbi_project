import { fetchArticleById } from 'entities/Article/model/services'
import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { classNames, Mods } from 'shared/lib/helpers'
import { useAppDispatch } from 'shared/lib/hooks'
import {
  Text,
  TextType,
  TextSize,
  Skeleton,
  Avatar,
  AvatarSize,
  Icon,
} from 'shared/ui'
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'

import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../../model/selectors/articleDetailsSelectors'
import { articleDetailsReducer } from '../../../model/slice/articleDetailsSlice'
import {
  ArticleBlock,
  ArticleBlockType,
} from '../../../model/types/articleSchema'
import {
  ArticleCodeBlockComponent,
  ArticleImageBlockComponent,
  ArticleTextBlockComponent,
} from '../../components'

import cls from './ArticleDetails.module.scss'

export interface ArticleDetailsProps {
  className?: string
  articleId: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, articleId } = props
  const { t } = useTranslation('articleDetailsPage')
  const dispatch = useAppDispatch()

  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const articleDetailsData = useSelector(getArticleDetailsData)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(articleId))
    }
  }, [dispatch, articleId])

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        )
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        )
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        )
      default:
        return null
    }
  }, [])

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          borderRadius="50%"
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    )
  } else if (error) {
    content = (
      <Text
        title={t('error-fetching-this-article')}
        type={TextType.ERROR}
        size={TextSize.HEADER}
      />
    )
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar
            className={cls.avatar}
            size={AvatarSize.LARGE}
            src={articleDetailsData?.img}
            alt="ArticleDetailsLogo"
          />
        </div>
        <div className={cls.titleWrapper}>
          <Text
            className={cls.title}
            title={articleDetailsData?.title}
            size={TextSize.HEADER}
          />
        </div>
        <Text
          className={cls.skeleton}
          title={articleDetailsData?.subtitle}
          size={TextSize.LARGE}
        />
        <div className={cls.articleInfoWrapper}>
          <Icon icon={EyeIcon} />
          <Text className={cls.titleText} title={articleDetailsData?.views} />
        </div>
        <div className={cls.articleInfoWrapper}>
          <Icon icon={CalendarIcon} />
          <Text
            className={cls.titleText}
            title={articleDetailsData?.createdAt}
          />
        </div>
        {articleDetailsData?.blocks.map(renderBlock)}
      </>
    )
  }

  const mods: Mods = {}
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div
        data-testid="articleDetails.test"
        className={classNames(cls.articleDetails, mods, [className])}
      >
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
