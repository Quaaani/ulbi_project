import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import MainPage from './MainPage'

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = () => <MainPage />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [StoreDecorator({})]

export const DefaultDark = Template.bind({})
Default.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
