import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import About from './About'

export default {
  title: 'pages/About',
  component: About,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof About>

const Template: ComponentStory<typeof About> = (
  args: Record<string, unknown>,
) => <About {...args} />

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
Default.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
