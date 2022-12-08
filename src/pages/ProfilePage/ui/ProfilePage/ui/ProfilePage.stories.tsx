import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProfilePage, { ProfileProps } from './ProfilePage'

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import MockAvatar from '@/shared/assets/tests/mockAvatar.jpeg'


export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args: ProfileProps) => (
  <ProfilePage {...args} />
)

const mockData = {
  profile: {
    formData: {
      id: '2a8337d8-8b44-48be-8518-abe45e18df9d',
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
