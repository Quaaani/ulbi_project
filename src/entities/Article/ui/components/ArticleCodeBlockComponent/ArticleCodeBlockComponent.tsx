import { memo } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'
import { Code } from 'shared/ui'

import { ArticleCodeBlock } from '../../../model/types/articleSchema'

import cls from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props

  const mods: Mods = {}
  return (
    <div data-testid="articleCodeBlock.test" className={classNames(cls.articleCodeBlock, mods, [className])}>
      <Code codeValue={block.code} />
    </div>
  )
})
