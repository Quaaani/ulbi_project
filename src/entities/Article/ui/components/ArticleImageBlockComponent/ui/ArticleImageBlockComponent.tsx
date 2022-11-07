import { memo } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'
import { Text } from 'shared/ui'

import { ArticleImageBlock } from '../../../../model/types/articleSchema'

import cls from './ArticleImageBlockComponent.module.scss'

export interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props

    const mods: Mods = {}
    return (
      <div
        data-testid="articleImageBlock.test"
        className={classNames(cls.articleImageBlock, mods, [className])}
      >
        <div className={cls.imgWrapper}>
          <img className={cls.img} src={block.src} alt={block.title} />
        </div>
        {block.title ? (
          <div className={cls.titleWrapper}>
            <Text title={block.title}/>
          </div>
        ) : null}
      </div>
    )
  },
)
