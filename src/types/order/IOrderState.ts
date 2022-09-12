import { IOrder } from './IOrder';
import { IProductInCart } from '../products/IProductInCart';

export interface IOrderState {
    order: IOrder;
    setPaymentMethod: (method: string) => void;
    setDeliveryAddress: (address: string) => void;
    executeOrder: (userId: number | undefined, shoppingCart: IProductInCart[], deliveryAddress: string) => void;
}