import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (
  args: Record<string, unknown>,
) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
}

export const DefaultDark = Template.bind({})
DefaultDark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
