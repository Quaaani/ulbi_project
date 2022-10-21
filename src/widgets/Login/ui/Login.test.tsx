import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import { Login } from './Login'

describe('Login Element Test', () => {
  test('Default Test', () => {
    ComponentRender(<Login />)
    expect(screen.getByTestId('login.test')).toBeInTheDocument()
  })
})
