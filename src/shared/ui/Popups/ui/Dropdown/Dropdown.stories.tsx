import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import { Button } from '../../../Button'

import { Dropdown, DropdownProps } from './Dropdown'

export default {
  title: 'shared/Popups/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    trigger: <Button title="Trigger" />,
    items: [
      {
        content: 'Value 1',
      },
      {
        content: 'Value 2',
      },
      {
        content: 'Value 3',
        disabled: true,
      },
      {
        content: 'Value 4',
      },
    ],
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args: DropdownProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <Dropdown {...args} />
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

export const BottomLeft = Template.bind({})
BottomLeft.args = {
  direction: 'bottom-left',
}

export const BottomRight = Template.bind({})
BottomRight.args = {
  direction: 'bottom-right',
}

export const TopLeft = Template.bind({})
TopLeft.args = {
  direction: 'top-left',
}

export const TopRight = Template.bind({})
TopRight.args = {
  direction: 'top-right',
}
