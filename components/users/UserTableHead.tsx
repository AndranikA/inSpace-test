import UserTableCell from "./UserTableCell";

const UserTableHead = () => {
  return (
    <li className='flex justify-between font-bold text-lg border-b-2 border-black sticky top-0 bg-gray-200 pt-2'>
      <UserTableCell>Id</UserTableCell>
      <UserTableCell>Name</UserTableCell>
      <UserTableCell>Avatar</UserTableCell>
      <UserTableCell>Is Banned</UserTableCell>
      <UserTableCell>Registered At</UserTableCell>
      <UserTableCell>Edit</UserTableCell>
      <UserTableCell>Delete</UserTableCell>
    </li>
  );
};

export default UserTableHead
