import { render, screen } from '@testing-library/react'

import { Button, ButtonTheme } from './Button'

describe('Button Element Test', () => {
  test('Default Test', () => {
    render(<Button title="Test" />)
    expect(screen.getByTestId('button.test')).toBeInTheDocument()
  })

  test('Adding ClassName Test', () => {
    render(<Button title="Test" theme={ButtonTheme.CLEAR} />)
    expect(screen.getByTestId('button.test')).toHaveClass('clear')
  })
})
