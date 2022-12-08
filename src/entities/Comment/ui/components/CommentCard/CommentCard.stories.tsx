import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { CommentCard, CommentCardProps } from './CommentCard'

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'


export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    comment: {
      id: '395a276e-e978-4e4b-9d15-ea1b08e105ca',
      articleId: '1f3668e3-8856-4866-8ef8-0e43f747b539',
      text: 'Are you sure about this?',
      user: {
        id: 'b6bd2c73-2fa2-482e-81bc-0292e9a98a4e',
        username: 'Bob',
        avatar:
          'http://www.paullee.com/misc/FacebookAvatars/facebook-avatars/91E.jpg',
      },
    },
  },
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (
  args: CommentCardProps,
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
    <CommentCard {...args} />
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

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}
Loading.decorators = [StoreDecorator({})]
