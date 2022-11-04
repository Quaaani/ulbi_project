import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import { ArticleDetails } from './ArticleDetails'

describe('ArticleDetails Component Test', () => {
  test('Default Test', () => {
    ComponentRender(<ArticleDetails />)
    expect(screen.getByTestId('articleDetails.test')).toBeInTheDocument()
  })
})
