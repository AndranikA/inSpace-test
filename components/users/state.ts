import { atom } from 'jotai';

import { UserType } from './types';

export const openAddEditModalState = atom(false);
export const openDeleteModalState = atom(false);
export const currentUserState = atom<UserType | null>(null);

export const usersState = atom<UserType[]>([]);
export const filterUsers = atom({ byName: '', byIsBanned: false });

export const filteredUsersState = atom<UserType[]>((get) =>
  get(usersState).filter(({ name, isBanned }) => {
    const byName = get(filterUsers).byName.toLowerCase()
    const byIsBanned = get(filterUsers).byIsBanned
    const byNameCondition = name.toLowerCase().indexOf(byName) !== -1
    if (!byIsBanned) return byNameCondition
    return byNameCondition && Boolean(isBanned) === byIsBanned;
  })
);
