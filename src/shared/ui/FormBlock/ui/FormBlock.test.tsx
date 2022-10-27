import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import { FormBlock } from './FormBlock'

describe('FormBlock Element Test', () => {
  test('Default Test', () => {
    ComponentRender(<FormBlock>Test</FormBlock>)
    expect(screen.getByTestId('formblock.test')).toBeInTheDocument()
  })
})
