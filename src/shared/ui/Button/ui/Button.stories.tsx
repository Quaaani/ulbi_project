import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonProps, ButtonTheme } from './Button'

import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook'
import SaveIcon from '@/shared/assets/icons/save.svg'


export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    title: 'Storybook',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <Button {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
// Использование декоратора для выбора темы
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultDarkWithIcon = Template.bind({})
DefaultDarkWithIcon.args = {
  icon: SaveIcon,
}
DefaultDarkWithIcon.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear = Template.bind({})
Clear.args = {
  theme: ButtonTheme.CLEAR,
}

export const ClearWithIcon = Template.bind({})
ClearWithIcon.args = {
  icon: SaveIcon,
  theme: ButtonTheme.CLEAR,
}

export const Outline = Template.bind({})
Outline.args = {
  theme: ButtonTheme.OUTLINE,
}

export const OutlineWithIcon = Template.bind({})
OutlineWithIcon.args = {
  icon: SaveIcon,
  theme: ButtonTheme.OUTLINE,
}

export const Inverted = Template.bind({})
Inverted.args = {
  theme: ButtonTheme.INVERTED,
}

export const InvertedWithIcon = Template.bind({})
InvertedWithIcon.args = {
  icon: SaveIcon,
  theme: ButtonTheme.INVERTED,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  theme: ButtonTheme.OUTLINE,
}

export const DisabledWithIcon = Template.bind({})
DisabledWithIcon.args = {
  disabled: true,
  icon: SaveIcon,
  theme: ButtonTheme.OUTLINE,
}

// TODO: Create Template for Circle Theme
// const CircleTemplate: ComponentStory<typeof Button> = (args) => (
//   <div
//     style={{
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: '100%',
//       height: '100vh',
//     }}
//   >
//     <div
//       style={{
//         width: '60px',
//         height: '60px',
//       }}
//     >
//       <Button {...args} />
//     </div>
//   </div>
// )

// export const Circle = CircleTemplate.bind({})
// Circle.args = {
//   title: '+',
//   theme: ButtonTheme.CIRCLE,
// }
