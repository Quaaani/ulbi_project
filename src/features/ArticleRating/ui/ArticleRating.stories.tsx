import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArticleRating, { ArticleRatingProps } from './ArticleRating'

import { ThemeDecorator, StoreDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args: ArticleRatingProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <ArticleRating {...args} />
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
