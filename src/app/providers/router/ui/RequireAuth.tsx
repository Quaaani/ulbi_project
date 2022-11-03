import { Navigate, useLocation } from 'react-router-dom'
import { useUserAuthData } from 'shared/lib/hooks'
import { RoutePath } from 'shared/router'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useUserAuthData()
  const location = useLocation()

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  return children
}
