export type ProductType = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  parentId: number | null;
  children?: ProductType[];
};
