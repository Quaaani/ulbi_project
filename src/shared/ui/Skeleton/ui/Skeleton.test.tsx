import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import { Skeleton } from './Skeleton'

describe('Skeleton Component Test', () => {
  test('Default Test', () => {
    ComponentRender(<Skeleton />)
    expect(screen.getByTestId('skeleton.test')).toBeInTheDocument()
  })
})
