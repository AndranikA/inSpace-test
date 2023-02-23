import { useSetAtom } from "jotai";

import { Button } from "@/components/designSystem/action";
import { IconDelete } from "@/components/designSystem/informational/Icons";

import UserTableCell from "./UserTableCell";

import { openDeleteModalState, currentUserState } from "./state";
import { UserType } from "./types";

const DeleteUserCell = ({ user }: { user: UserType }) => {
  const setOpenDeleteModal = useSetAtom(openDeleteModalState);
  const setCurrentUser = useSetAtom(currentUserState);

  const deleteHandler = () => {
    setOpenDeleteModal(true);
    setCurrentUser(user);
  };
  return (
    <UserTableCell>
      <Button variant='caution' onClick={deleteHandler}>
        <IconDelete />
      </Button>
    </UserTableCell>
  );
};

export default DeleteUserCell
