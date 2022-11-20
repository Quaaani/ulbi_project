import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ProfileError } from 'entities/Profile'
import MockAvatar from 'shared/assets/tests/mockAvatar.jpeg'

import { ProfileForm, ProfileFormProps } from './ProfileForm'

export default {
  title: 'pages/ProfileForm',
  component: ProfileForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileForm>

const Template: ComponentStory<typeof ProfileForm> = (
  args: ProfileFormProps,
) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <ProfileForm {...args} />
  </div>
)

const mockData = {
  id: '2a8337d8-8b44-48be-8518-abe45e18df9d',
  firstName: 'Igorbek',
  lastName: 'Maratov',
  age: '42',
  countryIso: Country.KG,
  currensyIso: Currency.KZT,
  avatar: MockAvatar,
}

export const Default = Template.bind({})
Default.args = {
  formData: mockData,
}

export const DefaultDark = Template.bind({})
DefaultDark.args = {
  formData: mockData,
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const WithError = Template.bind({})
WithError.args = {
  error: ProfileError.FORBIDDEN,
}

export const IsLoading = Template.bind({})
IsLoading.args = {
  isLoading: true,
}
