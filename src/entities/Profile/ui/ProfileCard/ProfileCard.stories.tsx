import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { ProfileCard, ProfileCardProps } from './ProfileCard'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (
  args: ProfileCardProps,
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
    <ProfileCard {...args} />
  </div>
)

const mockData = {
  id: '2a8337d8-8b44-48be-8518-abe45e18df9d',
  firstName: 'Igorbek',
  lastName: 'Maratov',
  age: '42',
  countryIso: Country.KG,
  currensyIso: Currency.KZT,
}

export const Default = Template.bind({})
Default.args = { formData: mockData }

export const DefaultDark = Template.bind({})
DefaultDark.args = { formData: mockData }
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
