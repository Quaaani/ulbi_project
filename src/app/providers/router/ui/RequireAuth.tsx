import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { getUserRoles, UserRole } from '@/entities/User'
import { useUserAuthData } from '@/shared/lib/hooks'
import { RoutePath } from '@/shared/router'

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRole[]
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { children, roles } = props

  const auth = useUserAuthData()
  const location = useLocation()

  const userRoles = useSelector(getUserRoles)

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some((requiredRole) => userRoles.includes(requiredRole))
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate replace to={RoutePath.main} state={{ from: location }} />
  }

  if (!hasRequiredRoles) {
    return <Navigate replace to={RoutePath.forbidden} state={{ from: location }} />
  }

  return children
}
