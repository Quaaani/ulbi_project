import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import { Text, TextSize } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (
  args: Record<string, unknown>,
) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
      backgroundColor: 'white',
    }}
  >
    <Text {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Test',
}

export const DefaultDark = Template.bind({})
DefaultDark.args = {
  children: 'Test',
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Large = Template.bind({})
Large.args = {
  children: 'Test',
  size: TextSize.LARGE,
}

export const Header = Template.bind({})
Header.args = {
  children: 'Test',
  size: TextSize.HEADER,
}
