import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import { NotFoundPage } from './NotFoundPage'

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [StoreDecorator({})]

export const DefaultDark = Template.bind({})
Default.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
