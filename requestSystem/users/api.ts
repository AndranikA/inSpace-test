import { UserType } from "@/components/users/types"

import apiClient from "../apiClient"

export const fetchUsers: () => Promise<UserType[]> = () => apiClient.get('users').json()

export const addUser = ({ name, isBanned }: UserType) => {
  return apiClient
    .post('users', {
      json: {
        name,
        isBanned,
      },
    })
    .json();
}

export const deleteUser = (id: string) => {
  return apiClient
    .delete(`users/${id}`)
    .json();
}

export const editUser = ({ id, name, isBanned }: UserType) => {
  return apiClient
    .put(`users/${id}`, {
      json: {
        id,
        name,
        isBanned,
      },
    })
    .json();
}
