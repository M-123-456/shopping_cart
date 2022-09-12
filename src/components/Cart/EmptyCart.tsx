import { useNavigate } from 'react-router-dom';

import BaseButton from  '../ui/buttons/BaseButton';
 
const EmptyCart = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/', { replace: true });
    }

    return (  
        <>
            <p>Your shopping cart is empty!</p>
            <BaseButton onClick={navigateToHome}>
                Continue shopping
            </BaseButton>
        </>
    );
}
 
export default EmptyCart;