import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator, StoreDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import AdminPanelPage, { AdminPanelPageProps } from './AdminPanelPage'

export default {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AdminPanelPage>

const Template: ComponentStory<typeof AdminPanelPage> = (args: AdminPanelPageProps) => <AdminPanelPage {...args} />

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultGreen = Template.bind({})
DefaultGreen.args = {}
DefaultGreen.decorators = [ThemeDecorator(Theme.GREEN)]
