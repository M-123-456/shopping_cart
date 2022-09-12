import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store';

import { getProductById } from '../../data/products'; 

// Components
import ProductCardInCart from '../cards/ProductCardInCart';
import BaseButton from '../ui/buttons/BaseButton';
 
const FilledCart = () => {
    const navigate = useNavigate();

    const shoppingCart = useStore(state => state.shoppingCart);

    let totalPrice = 0;
    shoppingCart.forEach(product => {
        const productDetails = getProductById(product.productId);
        if(productDetails) {
            const sum = productDetails.price * product.quantity
            totalPrice += sum;
        }
    })

    return (  
        <>
            <div
                area-label="product_cards"
                className="flex flex-col items-center w-full py-4 gap-y-3"
            >
                {
                    shoppingCart.map(product => (
                        <ProductCardInCart 
                            key={product.productId}
                            id={product.productId}
                            quantity={product.quantity}
                        />
                    ))
                }
            </div>
            <div 
                area-label="start_payment_process"
                className="flex items-center gap-4 px-4 py-2 border rounded-full border-slate-400">
                <p>
                    Total: {totalPrice} EUR
                </p>
                <BaseButton
                    onClick={() => navigate('/payment', { replace: true })}
                    >
                    Buy Now
                </BaseButton>
            </div>
        </>
    );
}
 
export default FilledCart;