import { screen } from '@testing-library/react'

import { Input } from './Input'

import { ComponentRender } from '@/shared/lib/helpers/tests/ComponentRender'


describe('Input Element Test', () => {
  test('Default Test', () => {
    ComponentRender(<Input>Test</Input>)
    expect(screen.getByTestId('input.test')).toBeInTheDocument()
  })
})
