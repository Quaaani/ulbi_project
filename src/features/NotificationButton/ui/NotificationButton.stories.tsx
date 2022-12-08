import { ComponentStory, ComponentMeta } from '@storybook/react'

import { NotificationButton, NotificationButtonProps } from './NotificationButton'

import { ThemeDecorator, StoreDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'


export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationButton>

const Template: ComponentStory<typeof NotificationButton> = (args: NotificationButtonProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <NotificationButton {...args} />
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
