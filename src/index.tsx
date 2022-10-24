import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import 'shared/config/i18n/i18n'
import 'app/styles/index.scss'

import App from './app/App'

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
