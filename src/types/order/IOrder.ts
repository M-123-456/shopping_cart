import { IProductInCart } from '../products/IProductInCart';

export interface IOrder {
    orderId: string | undefined;
    userId: number | undefined;
    orderedDate: Date | undefined;
    products: IProductInCart[] | undefined;
    deliveryAddress: string | undefined;
    paymentMethod: string | undefined;
}