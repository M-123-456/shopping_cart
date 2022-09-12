import { IProductInCart } from '../products/IProductInCart';

export interface IShoppingCartState {
    shoppingCart: IProductInCart[] | [];
    emptyCart: () => void;
    addToCart: (product: IProductInCart) => void;
    changeProductQuantity: (product: IProductInCart) => void;
    deleteProduct: (id: string | undefined) => void;
}
