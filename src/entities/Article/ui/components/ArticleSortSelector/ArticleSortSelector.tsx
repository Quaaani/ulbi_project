import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'
import { SortOrder } from 'shared/types'
import { Select } from 'shared/ui/Select'

import { ArticleSortField } from '../../../model/types/articleSchema'

import cls from './ArticleSortSelector.module.scss'

import type { SelectOption } from 'shared/ui/Select'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeSort: (newSort: ArticleSortField) => void
  onChangeOrder: (newOrder: SortOrder) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeSort, onChangeOrder } = props
  const { t } = useTranslation('articlesPage')

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('date'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('title'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('views'),
      },
    ],
    [t],
  )

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('ascending'),
      },
      {
        value: 'desc',
        content: t('descending'),
      },
    ],
    [t],
  )

  const mods: Mods = {}
  return (
    <div data-testid="articleSortSelector.test" className={classNames(cls.articleSortSelector, mods, [className])}>
      <Select<ArticleSortField> label={t('sort-by')} options={sortFieldOptions} value={sort} onChange={onChangeSort} />
      <Select<SortOrder> label={t('by')} options={orderOptions} value={order} onChange={onChangeOrder} />
    </div>
  )
})
