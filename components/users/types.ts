export type UserType = {
  id: string;
  name: string;
  avatar: string;
  isBanned: boolean;
  registeredAt: string;
};
export type UserActionsType = {
  onEdit: () => void;
  onDelete: () => void;
};
export type UserModalType = {
  open: boolean;
  user: UserType | null;
  onClose?: () => void
  onChange?: ((open: boolean) => void)
};