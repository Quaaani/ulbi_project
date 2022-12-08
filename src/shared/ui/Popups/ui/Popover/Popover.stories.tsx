import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../../../Button'

import { Popover, PopoverProps } from './Popover'

import { ThemeDecorator, StoreDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'



export default {
  title: 'shared/Popups/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    trigger: <Button title="Trigger" />,
    // items: [
    //   {
    //     content: 'Value 1',
    //   },
    //   {
    //     content: 'Value 2',
    //   },
    //   {
    //     content: 'Value 3',
    //     disabled: true,
    //   },
    //   {
    //     content: 'Value 4',
    //   },
    // ],
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args: PopoverProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <Popover {...args} />
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
