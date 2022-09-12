import { useStore } from '../../store';

interface DeliverAddressProps {
    
}
 
const AddressDetails: React.FC<DeliverAddressProps> = () => {

    const loginUserDetails = useStore(state => state.loginUserDetails);
    const deliveryAddress = useStore(state => state.order.deliveryAddress);
    const setDeliveryAddress = useStore(state => state.setDeliveryAddress);

    return (
        <section
            area-label="delivery_address"
            className="px-3 py-2 border rounded-lg border-slate-400"
        >   
            <h4
                className="text-2xl"
            >
                Your invoice address:
            </h4>
           
            <div
                area-label="user_address"    
            >
                <p className="mt-2">{loginUserDetails?.name}</p>
                <p>{loginUserDetails?.address.street}</p>
                <p>{loginUserDetails?.address.suite}</p>
                <p>{loginUserDetails?.address.city}</p>
                <p>{loginUserDetails?.address.zipcode}</p>
            </div>
        </section>  
        
    );
}
 
export default AddressDetails;