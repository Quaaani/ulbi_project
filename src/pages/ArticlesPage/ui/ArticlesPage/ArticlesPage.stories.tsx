import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import ArticlesPage, { ArticlesProps } from './ArticlesPage'

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args: ArticlesProps) => (
  <ArticlesPage {...args} />
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
