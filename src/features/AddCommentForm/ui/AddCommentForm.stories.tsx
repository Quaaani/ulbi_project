import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import AddCommentForm, { AddCommentFormProps } from './AddCommentForm'

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    onSendComment: action('onSendComment'),
  }
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (
  args: AddCommentFormProps,
) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <AddCommentForm {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [StoreDecorator({})]

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const DefaultGreen = Template.bind({})
DefaultGreen.args = {}
DefaultGreen.decorators = [ThemeDecorator(Theme.GREEN), StoreDecorator({})]
