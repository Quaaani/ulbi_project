import { render, screen } from '@testing-library/react'

import { Button, ButtonTheme } from './Button'

describe('Button Element Test', () => {
  test('Default Test', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('Adding ClassName Test', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('clear')
  })
})
