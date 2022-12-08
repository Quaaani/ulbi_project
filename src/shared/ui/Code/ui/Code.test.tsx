import { screen } from '@testing-library/react'

import { Code } from './Code'

import { ComponentRender } from '@/shared/lib/helpers/tests/ComponentRender'


describe('Code Component Test', () => {
  test('Default Test', () => {
    ComponentRender(<Code codeValue="some value" />)
    expect(screen.getByTestId('code.test')).toBeInTheDocument()
  })
})
