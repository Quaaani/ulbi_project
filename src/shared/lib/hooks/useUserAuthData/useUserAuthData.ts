import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'

export const useUserAuthData = () => useSelector(getUserAuthData)
