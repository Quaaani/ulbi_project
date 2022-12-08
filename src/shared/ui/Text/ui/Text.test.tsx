import { screen } from '@testing-library/react'

import { Text } from './Text'

import { ComponentRender } from '@/shared/lib/helpers/tests/ComponentRender'

describe('Text Element Test', () => {
  test('Default Test', () => {
    ComponentRender(<Text title="Test" />)
    expect(screen.getByTestId('text.test')).toBeInTheDocument()
  })
})
