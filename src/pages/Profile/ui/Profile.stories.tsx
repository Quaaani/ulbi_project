import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import Profile from './Profile'

export default {
  title: 'pages/Profile',
  component: Profile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Profile>

const Template: ComponentStory<typeof Profile> = (
  args: Record<string, unknown>,
) => <Profile {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [StoreDecorator({})]

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
