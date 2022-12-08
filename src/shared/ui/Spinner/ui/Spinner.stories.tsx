import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Spinner } from './Spinner'

import { ThemeDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'


export default {
  title: 'shared/Spinner',
  component: Spinner,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <Spinner />
  </div>
)

export const Default = Template.bind({})
Default.args = {}

export const PrimaryDark = Template.bind({})
Default.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
