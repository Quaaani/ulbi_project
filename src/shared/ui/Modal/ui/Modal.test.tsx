import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import { Modal } from './Modal'

describe('Modal Element Test', () => {
  test('Default Test', () => {
    ComponentRender(<Modal>Test</Modal>)
    expect(screen.getByTestId('modal.test')).toBeInTheDocument()
  })
})

