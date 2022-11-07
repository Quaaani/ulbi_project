import { memo } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'
import { Text, TextSize } from 'shared/ui'

import { ArticleTextBlock } from '../../../../model/types/articleSchema'

import cls from './ArticleTextBlockComponent.module.scss'

export interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props

    const mods: Mods = {}
    return (
      <div
        data-testid="articleTextBlock.test"
        className={classNames(cls.articleTextBlock, mods, [className])}
      >
        {block.title && <Text className={cls.title} title={block.title} size={TextSize.MEDIUM}/>}
        {block.paragraphs.map((paragraph) => (
          <Text key={paragraph} className={cls.paragraph} title={paragraph} />
        ))}
      </div>
    )
  },
)
