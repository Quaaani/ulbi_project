import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'

describe('ArticleDetailsPageHeader Component Test', () => {
  test('Default Test', () => {
    ComponentRender(<ArticleDetailsPageHeader />)
    expect(screen.getByTestId('articleDetailsPageHeader.test')).toBeInTheDocument()
  })
})
