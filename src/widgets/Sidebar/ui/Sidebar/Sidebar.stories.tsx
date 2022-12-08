import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Sidebar } from './Sidebar'

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'


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
    user: {
      authData: {
        id: 'b290b1b5-2816-4c07-b69d-60c381e7ff76',
      },
    },
  }),
]

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {
        id: 'b290b1b5-2816-4c07-b69d-60c381e7ff76',
      },
    },
  }),
]

export const DefaultGreen = Template.bind({})
Default.args = {}
DefaultGreen.decorators = [
  ThemeDecorator(Theme.GREEN),
  StoreDecorator({
    user: {
      authData: {
        id: 'b290b1b5-2816-4c07-b69d-60c381e7ff76',
      },
    },
  }),
]

export const NoAuth = Template.bind({})
NoAuth.args = {}
NoAuth.decorators = [StoreDecorator({})]
