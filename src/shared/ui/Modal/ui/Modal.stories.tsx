import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Modal, ModalProps } from './Modal'

import { ThemeDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'


export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    onClose: () => undefined,
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
