import { ProductType } from "@/components/products/types"

import apiClient from "../apiClient"

export const fetchProducts: () => Promise<ProductType[]> = () => apiClient.get('product').json()
