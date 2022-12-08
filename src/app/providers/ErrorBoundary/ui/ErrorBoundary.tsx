import React, { ErrorInfo, ReactNode } from 'react'

import { Error } from '@/widgets/Error'

interface ErrorBoundaryProps {
  // ReactNode - любой реакт компонент
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

// Типизация классовых компонентов:
// interface Component<P = {}, S = {}, SS = any>
// P - Props, S - State
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.warn('ErrorBoundary new Error: ', error, errorInfo)
  }

  render() {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) {
      // You can render any custom fallback UI
      return <Error />
    }

    return children
  }
}

export default ErrorBoundary
