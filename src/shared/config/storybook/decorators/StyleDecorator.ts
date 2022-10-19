import 'app/styles/index.scss'
import { Story } from '@storybook/react'

// Через этот декоратор проходят все компоненты (Story) с использованием импорта стилей
export const StyleDecorator = (story: () => Story) => story()
