import { addDecorator } from '@storybook/react'

import {
  RouterDecorator,
  StyleDecorator,
  ThemeDecorator,
} from '../../src/shared/config/storybook'
import { Theme } from '../../src/app/providers/ThemeProvider'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// CSS/SCSS Decorator
addDecorator(StyleDecorator)

// Theme Decorator
addDecorator(ThemeDecorator(Theme.LIGHT))

// Router DOM Decorator
addDecorator(RouterDecorator)
