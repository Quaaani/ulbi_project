import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import { Text } from './Text'

describe('Text Element Test', () => {
  test('Default Test', () => {
    ComponentRender(<Text title="Test" />)
    expect(screen.getByTestId('text.test')).toBeInTheDocument()
  })
})
