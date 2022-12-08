import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ProfilePage from './ProfilePage'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { Profile, profileReducer } from '@/entities/Profile'
import { $api } from '@/shared/api'
import { ComponentRender } from '@/shared/lib/helpers/tests/ComponentRender'


const mockData: Profile = {
  id: 'fd570033-85d0-4665-addd-faa795740410',
  firstName: 'Magnus',
  lastName: 'Carlsen',
  age: '27',
  currencyIso: Currency.EUR,
  countryIso: Country.KZ,
  isAdmin: false,
}

describe('pages/ProfilePage', () => {
  beforeEach(() => {
    ComponentRender(<ProfilePage />, {
      initialState: {
        profile: {
          readonly: true,
          data: mockData,
          formData: mockData,
        },
        user: {
          authData: {
            id: 'fd570033-85d0-4665-addd-faa795740410',
            username: 'Magnus'
          }
        }
      },
      asyncReducers: {
        profile: profileReducer,
      },
    })
  })
  test('Default Test', () => {
    expect(screen.getByTestId('ProfileForm')).toBeInTheDocument()
    expect(screen.getByTestId('ProfileFormHeader')).toBeInTheDocument()
    expect(screen.getByTestId('ProfileCard')).toBeInTheDocument()
  })
  test('User can edit his own Profile Card', async () => {
    await userEvent.click(screen.getByTestId('ProfileFormHeader.EditBtn'))
    expect(screen.getByTestId('ProfileFormHeader.CancelBtn')).toBeInTheDocument()
  })
  test('When CancelBtn pressed form returns initial data', async () => {
    await userEvent.click(screen.getByTestId('ProfileFormHeader.EditBtn'))

    await userEvent.clear(screen.getByTestId('ProfileCard.InputFirstName'))
    await userEvent.clear(screen.getByTestId('ProfileCard.InputLastName'))
    await userEvent.clear(screen.getByTestId('ProfileCard.InputAge'))

    await userEvent.type(screen.getByTestId('ProfileCard.InputFirstName'), 'zxc')
    await userEvent.type(screen.getByTestId('ProfileCard.InputLastName'), 'zxc')
    await userEvent.type(screen.getByTestId('ProfileCard.InputAge'), '42')

    expect(screen.getByTestId('ProfileCard.InputFirstName')).toHaveValue('zxc')
    expect(screen.getByTestId('ProfileCard.InputLastName')).toHaveValue('zxc')
    expect(screen.getByTestId('ProfileCard.InputAge')).toHaveValue('42')

    await userEvent.click(screen.getByTestId('ProfileFormHeader.CancelBtn'))

    expect(screen.getByTestId('ProfileCard.InputFirstName')).toHaveValue('Magnus')
    expect(screen.getByTestId('ProfileCard.InputLastName')).toHaveValue('Carlsen')
    expect(screen.getByTestId('ProfileCard.InputAge')).toHaveValue('27')
  })
  test('Save btn should be inactive if validation is failed', async () => {
    await userEvent.click(screen.getByTestId('ProfileFormHeader.EditBtn'))

    await userEvent.clear(screen.getByTestId('ProfileCard.InputAge'))

    expect(screen.getByTestId('Input.Error')).toBeInTheDocument()
    expect(screen.getByTestId('ProfileFormHeader.SaveBtn')).toHaveClass('inactive')
  })
  test('Successful scenario with PUT Request', async () => {
    const mockPutRequest = jest.spyOn($api, 'put')

    await userEvent.click(screen.getByTestId('ProfileFormHeader.EditBtn'))

    await userEvent.clear(screen.getByTestId('ProfileCard.InputAge'))

    await userEvent.type(screen.getByTestId('ProfileCard.InputAge'), '42')

    await userEvent.click(screen.getByTestId('ProfileFormHeader.SaveBtn'))

    expect(mockPutRequest).toHaveBeenCalled()
  })
})
