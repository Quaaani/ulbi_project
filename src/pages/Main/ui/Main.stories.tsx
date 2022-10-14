import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import Main from './Main'

export default {
  title: 'pages/Main',
  component: Main,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (
  args: Record<string, unknown>,
) => <Main {...args} />

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
Default.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
