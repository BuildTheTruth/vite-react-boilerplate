import { useMutation, useQuery } from 'react-query'
import axios from 'utils/axios'

const URL = {
  LIST: '/users',
  DETAIL: (id: number) => `${URL.LIST}/${id}`
}

export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (filters: string) => [...userKeys.lists(), { filters }] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id: number) => [...userKeys.details(), id] as const
}

export const useUsersQuery = () => useQuery(userKeys.lists(), () => axios.get(URL.LIST))

export const useAddUserMutation = () => useMutation(() => axios.post(URL.LIST))
