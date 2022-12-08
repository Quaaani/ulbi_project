import { screen } from '@testing-library/react'

import { Skeleton } from './Skeleton'

import { ComponentRender } from '@/shared/lib/helpers/tests/ComponentRender'


describe('Skeleton Component Test', () => {
  test('Default Test', () => {
    ComponentRender(<Skeleton />)
    expect(screen.getByTestId('skeleton.test')).toBeInTheDocument()
  })
})
