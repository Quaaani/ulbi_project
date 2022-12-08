import type { Notification } from '../model/types/notificationSchema'

import { rtkApi } from '@/shared/api'


const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: (limit) => ({
        url: '/notifications',
      }),
    }),
  }),
})

export const useNotifications = notificationApi.useGetNotificationsQuery
