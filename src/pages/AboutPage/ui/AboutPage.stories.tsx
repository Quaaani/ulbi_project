import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import AboutPage from './AboutPage'

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [StoreDecorator({})]

export const DefaultDark = Template.bind({})
Default.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
