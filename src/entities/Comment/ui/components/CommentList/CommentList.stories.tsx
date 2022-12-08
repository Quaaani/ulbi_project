import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { CommentList, CommentListProps } from './CommentList'

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'


export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    comments: [
      {
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
      {
        id: '6f0da139-e2fc-441a-8a42-3dbfe2686cf2',
        articleId: '36e4c8bb-d422-428d-bca0-1fa522badad5',
        text: 'Catch me outside how bout dat',
        user: {
          id: '29d132d4-0176-463e-8ed9-b96a76a014bb',
          username: 'Pop',
          avatar:
            'https://ih1.redbubble.net/image.1382109690.8812/st,small,507x507-pad,600x600,f8f8f8.jpg',
        },
      },
    ],
  },
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (
  args: CommentListProps,
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
    <CommentList {...args} />
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
