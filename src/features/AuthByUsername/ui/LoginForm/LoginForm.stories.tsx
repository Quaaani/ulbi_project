import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import { LoginErrors } from '../../model/services/loginByUsername/loginByUsername'

import LoginForm from './LoginForm'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (
  args: Record<string, unknown>,
) => <LoginForm {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
  StoreDecorator({
    loginForm: { username: 'Test', password: 'qwerty' },
  }),
]

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
DefaultDark.decorators = [
  StoreDecorator({
    loginForm: { username: 'Test', password: 'qwerty' },
  }),
]

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'Test',
      password: 'qwerty',
      error: LoginErrors.INCORRECT_DATA,
    },
  }),
]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'Test',
      password: 'qwerty',
      isLoading: true,
    },
  }),
]
