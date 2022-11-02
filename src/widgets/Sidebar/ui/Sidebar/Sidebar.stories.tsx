import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import { Sidebar } from './Sidebar'

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
  StoreDecorator({
    user: { authData: {} },
  }),
]

export const DefaultDark = Template.bind({})
Default.args = {}
DefaultDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: { authData: {} },
  }),
]

export const DefaultGreen = Template.bind({})
Default.args = {}
DefaultGreen.decorators = [
  ThemeDecorator(Theme.GREEN),
  StoreDecorator({
    user: { authData: {} },
  }),
]

export const NoAuth = Template.bind({})
NoAuth.args = {}
NoAuth.decorators = [
  StoreDecorator({
    user: {},
  }),
]
