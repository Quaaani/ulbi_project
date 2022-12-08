import { screen } from '@testing-library/react'

import { Login } from './Login'

import { ComponentRender } from '@/shared/lib/helpers/tests/ComponentRender'

describe('Login Element Test', () => {
  test('Default Test', () => {
    ComponentRender(<Login />)
    expect(screen.getByTestId('login.test')).toBeInTheDocument()
  })
})
