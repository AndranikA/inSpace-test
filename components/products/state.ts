import { atom } from 'jotai';

import { ProductType } from './types';

export const productsState = atom<ProductType[]>([]);
export const productsFilters = atom('');

export const productsTreeState = atom((get) => {
  let products = get(productsState);

  // we need a proper sorting in order to be able to create el - ancestors mapping
  products.sort((a, b) => Number(a.parentId) - Number(b.parentId) || Number(a.id) - Number(b.id));

  const mapIdToIndex = products.reduce((acc, el, i) => {
    acc[el.id] = i;
    return acc;
  }, {} as { [key: string]: number });

  // we need this mapping in order to be able to serach inside the products
  let mapIdToParents = products.reduce((acc, { id, parentId }) => {
    acc.set(id, parentId === null ? '0' : `${acc.get(parentId.toString())}.${parentId}`);
    return acc;
  }, new Map<string, string>());

  // here we filter the mapIdToParents based on the search
  for (let [key] of mapIdToParents) {
    const { name, description } = products[mapIdToIndex[key]];
    const byName = get(productsFilters).toLowerCase();
    const byDescription = get(productsFilters).toLowerCase();
    const byNameCondition = name.toLowerCase().indexOf(byName) !== -1;
    const byDescCondition = description.toLowerCase().indexOf(byDescription) !== -1;
    if (!byNameCondition && !byDescCondition) mapIdToParents.delete(key);
  }

  // this will be the final tree that we will render on the screen
  const productTree: ProductType[] = [];

  // build the tree based on the mapIdToParents search result, also using mapIdToIndex for better time complexity
  for (let [key, value] of mapIdToParents) {
    const [root, ...rest] = value.split('.');
    const parentIds = [...rest, key];

    if (parentIds.length === 1) {
      productTree.push(products[mapIdToIndex[key]]);
    } else {
      for (let i = 1; i < parentIds.length; i++) {
        const id = parentIds[i];
        const parentId = parentIds[i - 1];
        const parentEl = products[mapIdToIndex[parentId]];
        const currEl = products[mapIdToIndex[id]];
        
        // we need to check this as there can be no root elements after search
        if (i === 1) {
          if (productTree.indexOf(parentEl) === -1) {
            console.log(parentId);
            productTree.push(parentEl);
          }
        }
        if (parentEl.children) {
          if (parentEl.children.indexOf(currEl) === -1) parentEl.children.push(currEl);
        } else {
          parentEl.children = [currEl];
        }
      }
    }
  }
 
  return productTree;
});
