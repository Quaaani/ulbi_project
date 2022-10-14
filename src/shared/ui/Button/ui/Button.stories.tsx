import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

import { Button, ThemeButton } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
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
  theme: ThemeButton.CLEAR,
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Test',
  theme: ThemeButton.OUTLINE,
}
