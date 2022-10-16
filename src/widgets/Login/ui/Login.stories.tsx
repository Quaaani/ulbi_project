import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import { Login } from './Login'

export default {
  title: 'widgets/Login',
  component: Login,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = (
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
    <Login {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Test',
}

export const DefaultDark = Template.bind({})
DefaultDark.args = {
  children: 'Test',
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
