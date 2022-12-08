import { screen } from '@testing-library/react'

import { ArticleDetails } from './ArticleDetails'

import { ComponentRender } from '@/shared/lib/helpers/tests/ComponentRender'


describe('ArticleDetails Component Test', () => {
  test('Default Test', () => {
    ComponentRender(
      <ArticleDetails articleId="7d630a07-09e3-45f1-8741-faa74b848964" />,
    )
    expect(screen.getByTestId('articleDetails.test')).toBeInTheDocument()
  })
})
