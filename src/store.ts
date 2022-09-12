import create from 'zustand';
import { v4 } from 'uuid';

// Types
import { IProductState } from './types/products/IProductState';
import { IShoppingCartState } from './types/shoppingCart/IShoppingCartState';
import { IUsers } from './types/users/IUsers';
import { IOrderState } from './types/order/IOrderState';

import { getProducts } from './data/products';
import { getProductsByKeyword } from './data/products';


export const useStore = create<IProductState & IShoppingCartState & IUsers & IOrderState>((set, get) => ({
    // products
    products: [],
    filteredProducts: [],
    loadProducts: async() => {
        const _products = await getProducts();
        set((state) => ({
            products: _products
        }))
    },
    // todo change filterArticles to be able to search with more than one word
    filterProducts: (searchWords) => {
        set((state) => {
            const filtered = getProductsByKeyword(searchWords);
            return {
                filteredProducts: filtered
            }
        })
    },
    // shopping cart
    shoppingCart: [],
    emptyCart: () => {
        set((state) => ({
            shoppingCart: []
        }))
    },
    addToCart: ( product ) => {
        const shoppingCart = get().shoppingCart;
        const currentProduct = shoppingCart.find(item => item.productId === product.productId);
        // if the product already exists in the cart, change quantity
        set((state) => {
            if (currentProduct) {
                const _shoppingCart = state.shoppingCart.map(item => item.productId === product.productId ? { ...item, quantity: item.quantity += product.quantity } : item)
                return {
                    shoppingCart: _shoppingCart
                };
            } else {
                return {
                    shoppingCart: [
                        ...state.shoppingCart,
                        product
                    ]
                }
            }
        })
    },
    changeProductQuantity: (product) => {
        set((state) => {
            const _shoppingCart = state.shoppingCart.map(item => item.productId === product.productId ? product : item);
            return {
                shoppingCart: _shoppingCart
            }
        })
    },
    deleteProduct: (id) => {
        set((state) => {
            const filtered = state.shoppingCart.filter(product => product.productId !== id);
            return {
                shoppingCart: filtered
            }
        })
    },
    // users
    allUsers: [],
    loginUserId: 4,
    loginUserDetails: undefined,
    setLoginUserDetails: (user) => {
        set((state) => ({
            loginUserDetails: user
        }))
    },
    // order
    order: {
        orderId: undefined,
        userId: undefined,
        orderedDate: undefined,
        products: undefined, 
        deliveryAddress: undefined,
        paymentMethod: "creditCard",
    },
    setPaymentMethod: (method) => {
        set(state => ({
            order: {
                ...state.order,
                paymentMethod: method
            }
        }))
    },
    setDeliveryAddress: (address) => {
        set(state => ({
            order: {
                ...state.order,
                deliveryAddress: address
            }
        }))
    },
    executeOrder: (userId, shoppingCart, deliveryAddress) => {
        set(state => ({
            order: {
                ...state.order,
                orderId: v4(),
                userId: userId,
                deliveryAddress: deliveryAddress,
                orderedDate: new Date(),
                products: shoppingCart,
            }
        }))
    }
}))

export default useStore;