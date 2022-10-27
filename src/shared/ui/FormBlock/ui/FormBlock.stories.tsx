import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'

import { FormBlock, FormBlockProps } from './FormBlock'

export default {
  title: 'shared/FormBlock',
  component: FormBlock,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FormBlock>

const Template: ComponentStory<typeof FormBlock> = (args: FormBlockProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
      backgroundColor: 'white',
    }}
  >
    <FormBlock {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Test',
}

export const DefaultDark = Template.bind({})
DefaultDark.args = {
  children: 'Test',
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
