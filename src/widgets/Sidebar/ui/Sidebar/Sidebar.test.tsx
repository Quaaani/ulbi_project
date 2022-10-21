import { screen, fireEvent } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import { Sidebar } from './Sidebar'

describe('Sidebar Element Test', () => {
  test('Default Test', () => {
    ComponentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar.test')).toBeInTheDocument()
  })

  test('Collapse Test', () => {
    ComponentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('toggle.test')
    expect(screen.getByTestId('sidebar.test')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar.test')).toHaveClass('isCollapsed')
  })
})
