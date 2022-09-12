import { useNavigate } from 'react-router-dom';

import { useStore } from '../store';

// Types
import { IProductInCart } from '../types/products/IProductInCart'

// Components
import AddressDetails from '../components/form/AddressDetails';
import PaymentMethod from '../components/form/PaymentMethod';
import BaseButton from '../components/ui/buttons/BaseButton';

const Payment= () => {
    const navigate = useNavigate();
    const emptyCart = useStore(state => state.emptyCart);
    const loginUserId = useStore(state => state.loginUserId)
    const shoppingCart = useStore(state => state.shoppingCart)
    const executeOrder = useStore(state => state.executeOrder);
    const loginUserDetails = useStore(state => state.loginUserDetails);

    const deliveryAddress = `${loginUserDetails?.name}, ${loginUserDetails?.address.street} ${loginUserDetails?.address.suite} ${loginUserDetails?.address.city} ${loginUserDetails?.address.zipcode}`
    
    const onClickOrder = (loginUserId: number | undefined, shoppingCart: IProductInCart[], deliveryAddress: string) => {
        executeOrder(loginUserId, shoppingCart, deliveryAddress);
        emptyCart();
        navigate('/confirmation', { replace: true });
    };
    

    return (  
        <section
            className="flex flex-col gap-4 px-6 py-4"
        >
            <AddressDetails />
            <PaymentMethod />
            <BaseButton onClick={() => onClickOrder(loginUserId, shoppingCart, deliveryAddress)}>
                Order
            </BaseButton>
        </section>
    );
}
 
export default Payment;