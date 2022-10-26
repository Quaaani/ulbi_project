import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

import { Button, ButtonProps, ButtonTheme } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
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
    <Button {...args} />
  </div>
)

export const DefaultDark = Template.bind({})
DefaultDark.args = {
  children: 'Test',
}
// Использование декоратора для выбора темы
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear = Template.bind({})
Clear.args = {
  children: 'Test',
  theme: ButtonTheme.CLEAR,
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Test',
  theme: ButtonTheme.OUTLINE,
}

const CircleTemplate: ComponentStory<typeof Button> = (args) => (
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
    <div
      style={{
        width: '60px',
        height: '60px',
      }}
    >
      <Button {...args} />
    </div>
  </div>
)

export const Circle = CircleTemplate.bind({})
Circle.args = {
  children: 'Test',
  theme: ButtonTheme.CIRCLE,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: 'Test',
  theme: ButtonTheme.OUTLINE,
}
