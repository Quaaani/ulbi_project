import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import { Input } from './Input'

describe('Input Element Test', () => {
  test('Default Test', () => {
    ComponentRender(<Input>Test</Input>)
    expect(screen.getByTestId('input.test')).toBeInTheDocument()
  })
})
