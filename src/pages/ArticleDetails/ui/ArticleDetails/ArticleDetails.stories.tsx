import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import ArticleDetails, { ArticleDetailsProps } from './ArticleDetails'

export default {
  title: 'pages/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = (
  args: ArticleDetailsProps,
) => <ArticleDetails {...args} />

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultGreen = Template.bind({})
DefaultGreen.args = {}
DefaultGreen.decorators = [ThemeDecorator(Theme.GREEN)]
