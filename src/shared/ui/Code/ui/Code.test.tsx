import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import { Code } from './Code'

describe('Code Component Test', () => {
  test('Default Test', () => {
    ComponentRender(<Code codeValue="some value" />)
    expect(screen.getByTestId('code.test')).toBeInTheDocument()
  })
})
