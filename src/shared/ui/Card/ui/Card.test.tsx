import { screen } from '@testing-library/react'

import { Card } from './Card'

import { ComponentRender } from '@/shared/lib/helpers/tests/ComponentRender'


describe('Card Component Test', () => {
  test('Default Test', () => {
    ComponentRender(<Card renderContent={() => <div>Hello World</div>} />)
    expect(screen.getByTestId('card.test')).toBeInTheDocument()
  })
})
