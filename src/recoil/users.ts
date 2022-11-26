import { User } from 'interfaces/user'
import { atom } from 'recoil'

export const usersState = atom<User[]>({
  key: 'users',
  default: []
})
