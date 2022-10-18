import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import { Input } from './Input'

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (
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
    <Input {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Text',
}

export const DefaultDark = Template.bind({})
DefaultDark.args = {
  placeholder: 'Text',
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Focused = Template.bind({})
Focused.args = {
  placeholder: 'Text',
  value: 'Text',
}
