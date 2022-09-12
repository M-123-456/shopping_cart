import { useState, useCallback } from 'react';

import { IProductInCart } from '../types/products/IProductInCart';
import { IProduct } from '../types/products/IProduct';

interface IParams {
    currentProduct?:  IProductInCart;
    editProduct?: IProductInCart;
    article: IProduct | undefined;
    shoppingCart: IProductInCart[] | [];
}

export const useAvailability = () => {
    const [isAvailable, setIsAvailable] = useState(true);
    const [message, setMessage] = useState('');

    const checkAvailability = useCallback(( params: IParams ) => {
        
        let quantityOrdered: number = 0;
        let product: IProductInCart | undefined = params.currentProduct || params.editProduct;

        // asign quantity in shoppingCart as quantityOrdered
        const productInShoppingCart = params.shoppingCart.find(item => item.productId === product?.productId);
        if (productInShoppingCart) {
            quantityOrdered += productInShoppingCart.quantity
        }
    
        // if currenProduct is checked (SingleProduct), add quantity of currentProduct 
        if(params.currentProduct) {
            quantityOrdered += params.currentProduct.quantity
        }  

        // if ordered quantity is higher than the stock quantity, set NOT available and give message
        if(!((params.article!.quantity - quantityOrdered) >= 0)) {
            setIsAvailable(false);
            setMessage('Product not on stock');
        } else {
            setIsAvailable(true);
            setMessage('');
        }
    },[])

    return { isAvailable, message, checkAvailability}
}