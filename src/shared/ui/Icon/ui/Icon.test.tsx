import { screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/helpers/tests/ComponentRender'

import ProfileIcon from '../../../assets/icons/profile.svg'

import { Icon } from './Icon'

describe('Icon Component Test', () => {
  test('Default Test', () => {
    ComponentRender(<Icon icon={ProfileIcon} />)
    expect(screen.getByTestId('icon.test')).toBeInTheDocument()
  })
})
