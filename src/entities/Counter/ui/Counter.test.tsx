import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'
import { userEvent } from '@storybook/testing-library'

import { Counter } from './Counter'

describe('Counter Element Test', () => {
  test('Default Test', () => {
    ComponentRender(<Counter />)
    expect(screen.getByTestId('counter.test')).toBeInTheDocument()
  })
  test('Initial State Test', () => {
    const initialState = { counter: { value: 10 } }
    ComponentRender(<Counter />, { initialState })
    expect(screen.getByTestId('counterValue.test')).toHaveTextContent('10')
  })

  test('Increment Test', () => {
    const initialState = { counter: { value: 10 } }
    ComponentRender(<Counter />, { initialState })
    const incrementBtn = screen.getByTestId('incrementBtn.test')
    userEvent.click(incrementBtn)
    expect(screen.getByTestId('counterValue.test')).toHaveTextContent('11')
  })
  test('Decrement Test', () => {
    const initialState = { counter: { value: 10 } }
    ComponentRender(<Counter />, { initialState })
    const decrementBtn = screen.getByTestId('decrementBtn.test')
    userEvent.click(decrementBtn)
    expect(screen.getByTestId('counterValue.test')).toHaveTextContent('9')
  })
})
