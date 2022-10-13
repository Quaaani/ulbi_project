import { render, screen } from '@testing-library/react'

import { Button, ThemeButton } from './Button'

describe('Button Element Test', () => {
  test('Default Test', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('Adding ClassName Test', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('clear')
  })
})
