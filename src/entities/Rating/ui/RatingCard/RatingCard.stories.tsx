import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator, StoreDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'

import { RatingCard, RatingCardProps } from './RatingCard'

export default {
  title: 'entities/RatingCard',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = (args: RatingCardProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <RatingCard {...args} />
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
