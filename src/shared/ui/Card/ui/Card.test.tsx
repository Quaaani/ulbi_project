import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import { Card } from './Card'

describe('Card Component Test', () => {
  test('Default Test', () => {
    ComponentRender(<Card renderContent={() => <div>Hello World</div>} />)
    expect(screen.getByTestId('card.test')).toBeInTheDocument()
  })
})
