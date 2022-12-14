import { NavLink } from 'react-router-dom';

import useStore from '../../store';
// Types
import { IProduct } from '../../types/products/IProduct';

interface ProductCardProps {
    id: string;
}
 
const ProductCard: React.FC<ProductCardProps> = ( { id } ) => {

    const products = useStore(state => state.products);

    const product: IProduct | undefined = products?.find(product => product?.id === id);

    return (  
        <div
            className="py-3 px-4 w-60 border border-slate-400 rounded-lg hover:opacity-75"
        >
            <NavLink 
                to={`/products/${product?.id}`}
            >
                <div
                    className="h-2/3"
                >
                    <img 
                        className="w-full h-full object-contain"
                        src={product?.image}
                        alt={product?.name}
                        />
                </div>
                <h2 className="pt-2 text-xl font-bold text-center">{product?.name}</h2>
                <p className="text-center">{product?.price} Euro</p>
            </NavLink>
        </div>
    );
}
 
export default ProductCard;