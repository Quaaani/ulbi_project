import { screen } from '@testing-library/react'

import { FormBlock } from './FormBlock'

import { ComponentRender } from '@/shared/lib/helpers/tests/ComponentRender'


describe('FormBlock Element Test', () => {
  test('Default Test', () => {
    ComponentRender(<FormBlock>Test</FormBlock>)
    expect(screen.getByTestId('formblock.test')).toBeInTheDocument()
  })
})
