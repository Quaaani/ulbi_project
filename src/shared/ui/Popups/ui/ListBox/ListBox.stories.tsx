import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import { ListBox, ListBoxProps } from './ListBox'

export default {
  title: 'shared/Popups/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    value: 'Value 1',
    items: [
      {
        value: 'Value 1',
        content: 'Value 1',
      },
      {
        value: 'Value 2',
        content: 'Value 2',
      },
      {
        value: 'Value 3',
        content: 'Value 3',
        disabled: true,
      },
      {
        value: 'Value 4',
        content: 'Value 4',
      },
    ],
    defaultValue: 'Storybook',
  },
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args: ListBoxProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <ListBox {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultGreen = Template.bind({})
DefaultGreen.args = {}
DefaultGreen.decorators = [ThemeDecorator(Theme.GREEN)]
