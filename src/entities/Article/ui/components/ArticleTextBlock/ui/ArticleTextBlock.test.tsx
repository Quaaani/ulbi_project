import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import { ArticleTextBlock } from './ArticleTextBlock'

describe('ArticleTextBlock Component Test', () => {
  test('Default Test', () => {
    ComponentRender(<ArticleTextBlock />)
    expect(screen.getByTestId('articleTextBlock.test')).toBeInTheDocument()
  })
})
