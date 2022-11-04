import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import { ArticleImageBlock } from './ArticleImageBlock'

describe('ArticleImageBlock Component Test', () => {
  test('Default Test', () => {
    ComponentRender(<ArticleImageBlock />)
    expect(screen.getByTestId('articleImageBlock.test')).toBeInTheDocument()
  })
})
