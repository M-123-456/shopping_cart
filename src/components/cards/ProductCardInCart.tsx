import { useState, ChangeEvent, useEffect } from 'react';

import { getProductById } from '../../data/products';

// Hooks
import { useStore } from '../../store';
import { useAvailability } from '../../hooks/useAvailability';

// Components
import RedButton from '../ui/buttons/RedButton';

interface ProductCardInCartType {
    key: string | undefined,
    id: string | undefined,
    quantity: number
}

const ProductCardInCart: React.FC<ProductCardInCartType> = ( props ) => {
    const { id, quantity } = props;
    const article = getProductById(id);
    const shoppingCart = useStore(state => state.shoppingCart);
    const changeProductQuantity = useStore(state => state.changeProductQuantity);
    const deleteProduct = useStore(state => state.deleteProduct);

    // useAvailability
    const { isAvailable, message, checkAvailability } = useAvailability();

    const [editProduct, setEditProduct] = useState({
        productId: id,
        quantity: quantity
    })

    console.log(editProduct);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEditProduct(prev => ({
            ...prev,
            quantity: Number(e.target.value)
        }))
    }

    useEffect(() => {
        changeProductQuantity(editProduct)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[editProduct])

    useEffect(() => {
        checkAvailability({editProduct, article, shoppingCart})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editProduct.quantity, shoppingCart, article])

    return (  
        <div className="w-2/3 flex flex-col justify-center items-center gap-4 py-3 px-6 border border-slate-400 rounded-lg md:justify-between md:flex-row">
            <div className="min-w-min">
                <img className="w-20 md:w-44" src={article?.image} alt={article?.name} />
            </div>
            <div className="flex flex-col gap-y-3 items-center md:items-start">
                <h3>{article?.name}</h3>
                <p>{article?.price} EUR</p>
                <input 
                    className="w-20 border border-slate-400"
                    type="number" 
                    value={editProduct.quantity}
                    onChange={handleChange}
                />
                {/* todo onClickChangeToEditMode */}
                <RedButton
                    onClick={() => deleteProduct(id)}
                >
                    Delete from Cart
                </RedButton>
                {
                    !isAvailable &&
                    <p className="text-red-800">{message}</p>
                }
                <p>Total: {(article!.price * editProduct.quantity).toFixed(2)} EUR</p>
            </div>
        </div>
    );
}
 
export default ProductCardInCart;