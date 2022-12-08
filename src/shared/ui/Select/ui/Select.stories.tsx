import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select, SelectProps } from './Select'

import { ThemeDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'


export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    options: [
      {
        value: 'First value',
        content: 'First value',
      },
      {
        value: 'Second value',
        content: 'Second value',
      },
      {
        value: 'Third value',
        content: 'Third value',
      },
      {
        value: 'Fourth value',
        content: 'Fourth value',
      },
    ],
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args: SelectProps<string>) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <Select {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
