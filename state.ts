import { atom } from 'jotai'

import { LoginResponseType } from '@/components/auth/types'

export const userState = atom<LoginResponseType | null>(null)