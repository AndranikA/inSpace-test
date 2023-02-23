import { useSetAtom } from "jotai";

import { Button } from "@/components/designSystem/action";
import { IconEdit } from "@/components/designSystem/informational/Icons";

import UserTableCell from "./UserTableCell";

import { openAddEditModalState, currentUserState } from "./state";
import { UserType } from "./types";


const EditUserCell = ({ user }: { user: UserType }) => {
  const setOpenAddEditModal = useSetAtom(openAddEditModalState);
  const setCurrentUser = useSetAtom(currentUserState);

  const editHandler = () => {
    setOpenAddEditModal(true);
    setCurrentUser(user);
  };

  return (
    <UserTableCell>
      <Button onClick={editHandler}>
        <IconEdit />
      </Button>
    </UserTableCell>
  );
};

export default EditUserCell
