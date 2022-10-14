import { screen, fireEvent } from '@testing-library/react'
import { renderWithTranslations } from 'shared/lib/helpers/tests/renderWithTranslations'

import { Sidebar } from './Sidebar'

describe('Sidebar Element Test', () => {
  test('Default Test', () => {
    renderWithTranslations(<Sidebar />)
    expect(screen.getByTestId('sidebar.test')).toBeInTheDocument()
  })

  test('Collapse Test', () => {
    renderWithTranslations(<Sidebar />)
    const toggleBtn = screen.getByTestId('toggle.test')
    expect(screen.getByTestId('sidebar.test')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar.test')).toHaveClass('isCollapsed')
  })
})
