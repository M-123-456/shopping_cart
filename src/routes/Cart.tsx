import { useStore } from '../store';
// Components
import EmptyCart from '../components/Cart/EmptyCart';
import FilledCart from '../components/Cart/FilledCart';

const Cart = () => {
    const shoppingCart = useStore(state => state.shoppingCart);

    return (  
        <section
            className="py-4 flex flex-col gap-y-3 items-center"
        >
            {
                shoppingCart.length === 0 ? <EmptyCart /> : <FilledCart />
            }
        </section>
    );
}
 
export default Cart;