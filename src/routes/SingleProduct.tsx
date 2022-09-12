import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useStore } from '../store';
import { getProductById } from '../data/products';
import { useAvailability } from '../hooks/useAvailability';

// Types
import { IProduct } from '../types/products/IProduct';
import { IProductInCart } from '../types/products/IProductInCart';

// Components
import BaseButton from '../components/ui/buttons/BaseButton';

type ParamType = {
    id: string | undefined;
} 
 
const SingleProduct = () => {

    // Context from store
    const addToCart = useStore(state => state.addToCart);
    const shoppingCart = useStore(state => state.shoppingCart);

    // useAvailability
    const { isAvailable, message, checkAvailability } = useAvailability();

    // define article shown using param
    const param = useParams<ParamType>();
    const article: IProduct | undefined = getProductById(param.id);
  
    const initialValue = {
        productId: '',
        quantity: 0
    }
    
    const [currentProduct, setCurrentProduct] = useState<IProductInCart>(initialValue) ;
    
    //! log
    console.log('shoppingCart', shoppingCart, 'currentProduct', currentProduct, 'article', article);
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCurrentProduct(prev => ({
            ...prev,
            quantity: Number(e.target.value)
        }))
    }

    const onClickAdd = (currentProduct: IProductInCart) => {
        if(currentProduct.quantity > 0) {
            addToCart(currentProduct);
            setCurrentProduct(initialValue);
        }
    }

    useEffect(() => {
        if(article) {
            // ! better way to give parameters?
            checkAvailability( { currentProduct, article, shoppingCart });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentProduct.quantity, article, shoppingCart])

    useEffect(() => {
        setCurrentProduct(prev => ({
            ...prev,
            productId: article?.id 
        }))
    }, [param, article?.id]);

    return (  
        <section className="mt-5 py-3 px-4 flex flex-col gap-4 justify-center md:flex-row">
            <div>
                <img 
                    className="w-52"
                    src={article?.image} 
                    alt={article?.name} 
                />
            </div>
            <div>
                <h2>{article?.name}</h2>
                <p>{article?.description}</p>
                <p>{article?.price} Euro</p>
                <p>{article?.quantity === 0 ? 'Not Available' : 'On Stock'}</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="pl-2 border border-slate-400 rounded-sm">
                    <label 
                        htmlFor="quantity"
                        className="pr-4"
                    >
                        Quantity
                    </label>
                    <input
                        className="w-24" 
                        type="number" id="quantity" min="1" 
                        value={currentProduct.quantity} 
                        onChange={handleChange}/>
                </div>
                <BaseButton
                    disabled={currentProduct.quantity < 1}
                    onClick={() => onClickAdd(currentProduct)}
                >
                    Add to Cart
                </BaseButton>
                {
                    !isAvailable &&
                    <p className="text-red-800">{message}</p>
                }
            </div>
        </section>
    );
}
 
export default SingleProduct;