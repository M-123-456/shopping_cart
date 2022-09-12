import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

import { useStore } from '../../../store';

const CartIcon = () => {
    const navigate = useNavigate();
    const shoppingCart = useStore(state => state.shoppingCart);

     const onClickNavigate = () => {
        navigate('/cart', { replace: true });
    }

    return (  
        <div 
            className="py-1 px-2 flex gap-4 items-center bg-yellow-600 hover:opacity-75 rounded-full"
            onClick={onClickNavigate}
            >
                <FiShoppingCart />
                <div
                    className=""
                >
                    {shoppingCart?.length}
                </div>
        </div>
    );
}
 
export default CartIcon;