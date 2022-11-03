import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import Articles, { ArticlesProps } from './Articles'

export default {
  title: 'unsorted/Articles',
  component: Articles,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Articles>

const Template: ComponentStory<typeof Articles> = (args: ArticlesProps) => (
  <Articles {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultGreen = Template.bind({})
DefaultGreen.args = {}
DefaultGreen.decorators = [ThemeDecorator(Theme.GREEN)]
