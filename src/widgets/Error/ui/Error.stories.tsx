import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Error } from './Error'

import { ThemeDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'


export default {
  title: 'widgets/Error',
  component: Error,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Error>

const Template: ComponentStory<typeof Error> = () => <Error />

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
Default.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
