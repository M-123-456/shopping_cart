import { IProduct } from './IProduct';

export interface IProductState {
    products: IProduct[] | [];
    filteredProducts: IProduct[] | [];
    loadProducts: () => void;
    filterProducts: (searchWords: string) => void;
}