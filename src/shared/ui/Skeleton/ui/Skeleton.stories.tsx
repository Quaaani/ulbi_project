import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import { Skeleton, SkeletonProps } from './Skeleton'

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args: SkeletonProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <Skeleton {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  width: '100%',
  height: 200,
}

export const DefaultDark = Template.bind({})
DefaultDark.args = {
  width: '100%',
  height: 200,
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultGreen = Template.bind({})
DefaultGreen.args = {
  width: '100%',
  height: 200,
}
DefaultGreen.decorators = [ThemeDecorator(Theme.GREEN)]

export const Circle = Template.bind({})
Circle.args = {
  width: 100,
  height: 100,
  borderRadius: '50%',
}
