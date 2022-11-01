import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import MockAvatar from 'shared/assets/tests/mockAvatar.jpeg'

import Profile, { ProfileProps } from './Profile'

export default {
  title: 'pages/Profile',
  component: Profile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Profile>

const Template: ComponentStory<typeof Profile> = (args: ProfileProps) => (
  <Profile {...args} />
)

const mockData = {
  profile: {
    formData: {
      uid: '2a8337d8-8b44-48be-8518-abe45e18df9d',
      firstName: 'Igorbek',
      lastName: 'Maratov',
      age: '42',
      countryIso: Country.KG,
      currensyIso: Currency.KZT,
      avatar: MockAvatar,
    },
  },
}

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [StoreDecorator(mockData)]

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(mockData)]
