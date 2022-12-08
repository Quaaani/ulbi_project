import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text, TextProps, TextSize } from './Text'

import { ThemeDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'


export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    title: 'Storybook',
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args: TextProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <Text {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Medium = Template.bind({})
Medium.args = {
  size: TextSize.MEDIUM,
}

export const Large = Template.bind({})
Large.args = {
  size: TextSize.LARGE,
}

export const Header = Template.bind({})
Header.args = {
  size: TextSize.HEADER,
}
