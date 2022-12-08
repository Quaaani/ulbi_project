import { screen } from '@testing-library/react'

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'

import { ComponentRender } from '@/shared/lib/helpers/tests/ComponentRender'


describe('ArticleDetailsPageHeader Component Test', () => {
  test('Default Test', () => {
    ComponentRender(<ArticleDetailsPageHeader />)
    expect(screen.getByTestId('articleDetailsPageHeader.test')).toBeInTheDocument()
  })
})
