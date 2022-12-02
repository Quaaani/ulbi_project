import 'app/styles/index.scss'
import { Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Через этот декоратор проходят все компоненты (Story) с использованием импорта стилей
export const RouterDecorator = (StoryComponent: Story) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
)
