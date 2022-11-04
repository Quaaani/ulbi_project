import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import { ArticleCodeBlock } from './ArticleCodeBlock'

describe('ArticleCodeBlock Component Test', () => {
  test('Default Test', () => {
    ComponentRender(<ArticleCodeBlock />)
    expect(screen.getByTestId('articleCodeBlock.test')).toBeInTheDocument()
  })
})
