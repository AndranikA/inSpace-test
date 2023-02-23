import { LoginDataType, LoginResponseType } from "@/components/auth/types"

import apiClient from "../apiClient"

export const login: ({ name, password }: LoginDataType) => Promise<LoginResponseType> = ({ name, password }) => {
  return apiClient
    .post('login', {
      json: {
        name,
        password,
      },
    })
    .json();
}

export const fetchUser: () => Promise<LoginResponseType> = () => {
  return apiClient
    .get('user')
    .json();
}

export const logout = () => {
  return apiClient
    .post('logout')
    .json();
}
