import { Routes, Route } from 'react-router-dom';
import Cart from '../routes/Cart';
import Confirmation from '../routes/Confirmation';
import Error404 from '../routes/Error404';
import Home from '../routes/Home';
import Payment from '../routes/Payment';
import SingleProduct from '../routes/SingleProduct';

interface RouterProps {
    
}
 
const Router: React.FunctionComponent<RouterProps> = () => {
    return (  
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="products/:id" element={<SingleProduct />} />
                <Route path="cart" element={<Cart />} />
                <Route path="payment" element={<Payment />} />
                <Route path="confirmation" element={<Confirmation />} />
            </Route>
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}
 
export default Router;