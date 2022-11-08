import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames, Mods } from 'shared/lib/helpers'
import { Text, TextType, TextSize } from 'shared/ui'

import cls from './ArticleDetailsPage.module.scss'

export interface ArticleDetailsProps {}

export const ArticleDetailsPage = (props: ArticleDetailsProps) => {
  const { t } = useTranslation('articleDetailsPage')
  const { articleId } = useParams<{ articleId: string }>()

  const mods: Mods = {}
  return (
    <div className={classNames(cls.articleDetailsPage, mods)}>
      {articleId ? (
        <>
          <ArticleDetails articleId={articleId} />
          <Text
            className={cls.commentTitle}
            title={t('Comments')}
            size={TextSize.HEADER}
          />
          <CommentList
            comments={[
              {
                id: '6b125e2c-bde2-4747-bd95-b53182de8f55',
                text: 'some comment',
                articleId: '2c1981be-2b0b-4c1c-8e31-010c878fea87',
                user: {
                  id: 'ec6a10ce-8f24-496e-b735-23cc49fd4b7a',
                  username: 'Kirill',
                  avatar:
                    'https://ih1.redbubble.net/image.1382109690.8812/st,small,507x507-pad,600x600,f8f8f8.jpg',
                },
              },
              {
                id: '5cf697f4-ae6c-4fd9-a704-e197551a56cb',
                text: 'some comment 2',
                articleId: '2fccd683-6a1b-42f1-8643-4b6626a80c6b',
                user: {
                  id: 'e6882431-311d-4f41-b0dd-38c03ef71af7',
                  username: 'Andrey',
                  avatar:
                    'http://www.paullee.com/misc/FacebookAvatars/facebook-avatars/91E.jpg',
                },
              },
              {
                id: 'a3378e14-ff72-4e80-ba99-36413a002485',
                text: 'some comment 3',
                articleId: '32fc16cb-c737-415c-8c39-a43d51fe65e9',
                user: {
                  id: 'e6882431-311d-4f41-b0dd-38c03ef71af7',
                  username: 'Oleg',
                  avatar:
                    'https://avatars.akamai.steamstatic.com/36804a90f7b63462cad795655c2e5b949873def3_full.jpg',
                },
              },
            ]}
          />
        </>
      ) : (
        <Text
          title={t('article-was-not-found')}
          type={TextType.ERROR}
          size={TextSize.HEADER}
        />
      )}
    </div>
  )
}

export default memo(ArticleDetailsPage)
