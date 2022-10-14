import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import { NotFound } from './NotFound'

export default {
  title: 'pages/NotFound',
  component: NotFound,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFound>

const Template: ComponentStory<typeof NotFound> = (args) => (
  <NotFound {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
Default.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
