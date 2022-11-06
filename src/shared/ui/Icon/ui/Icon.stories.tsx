import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import ProfileIcon from '../../../assets/icons/profile.svg'

import { Icon, IconColor, IconProps } from './Icon'

export default {
  title: 'shared/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    icon: ProfileIcon,
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args: IconProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <Icon {...args} />
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

export const DefaultInverted = Template.bind({})
DefaultInverted.args = {
  color: IconColor.INVERTED,
}

export const DefaultDarkInverted = Template.bind({})
DefaultDarkInverted.args = {
  color: IconColor.INVERTED,
}
DefaultDarkInverted.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultGreenInverted = Template.bind({})
DefaultGreenInverted.args = {
  color: IconColor.INVERTED,
}
DefaultGreenInverted.decorators = [ThemeDecorator(Theme.GREEN)]
