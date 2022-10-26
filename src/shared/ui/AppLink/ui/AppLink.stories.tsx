import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AppLink, AppLinkProps, AppLinkTheme } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

  // Дефолтные пропсы для всех вариантов
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args: AppLinkProps) => (
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
    <AppLink {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Test',
  theme: AppLinkTheme.PRIMARY,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Test',
  theme: AppLinkTheme.SECONDARY,
}
