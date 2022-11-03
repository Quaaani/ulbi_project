import { getUserAuthData } from 'entities/User'
import { useSelector } from 'react-redux'

export const useUserAuthData = () => useSelector(getUserAuthData)
