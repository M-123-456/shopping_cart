import { useStore } from '../store';
 
const Confirmation = () => {

    const order = useStore(state => state.order)
    console.log('order', order);

    return (
        <section
            area-label="order_confirmation"
            className="mt-4 ml-6"
        >
            <div className="text-2xl">
                Order process completed.<br />
                Thank you for shopping!
            </div>
            <div
                className="mt-2"
            >
                <p>Your order No.: {order?.orderId}</p>
            </div>
        </section>  
    );
}
 
export default Confirmation;