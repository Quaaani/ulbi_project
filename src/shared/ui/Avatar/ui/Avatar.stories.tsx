import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import MockAvatar from '../../../assets/tests/mockAvatar.jpeg'

import { Avatar, AvatarProps, AvatarSize } from './Avatar'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    src: MockAvatar,
    alt: 'Storybook',
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args: AvatarProps) => (
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
    <Avatar {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Large = Template.bind({})
Large.args = {
  size: AvatarSize.LARGE,
}
