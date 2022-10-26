import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import { Error } from './Error'

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
