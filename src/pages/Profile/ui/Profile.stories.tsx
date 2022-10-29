import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'
import { Country, Currency } from 'shared/const'

import Profile, { ProfileProps } from './Profile'

export default {
  title: 'pages/Profile',
  component: Profile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Profile>

const Template: ComponentStory<typeof Profile> = (args: ProfileProps) => <Profile {...args}/>

const mockData = {
  profile: {
    formData: {
      firstName: 'Story',
      lastName: 'Book',
      age: '42',
      countryIso: Country.KG,
      currencyIso: Currency.KGS,
    },
    isLoading: false,
    readonly: false,
  },
}

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [StoreDecorator(mockData)]

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(mockData)]
