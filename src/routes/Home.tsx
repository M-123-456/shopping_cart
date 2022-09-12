import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import useStore from '../store';

// Components
import ProductCard from '../components/cards/ProductCard';
import NavBar from '../components/navbar/NavBar';

// todo payment method
// todo address form
// todo shopping cart product or number of products
// todo search responsive

const Home = () => {

    const { pathname } = useLocation();

    const filteredProducts = useStore(state => state.filteredProducts);
    const loadProducts = useStore(state => state.loadProducts);

    useEffect(() => {
        loadProducts();
    },[])
   
    return (
        <>
            <NavBar />
                {
                    pathname === '/' ? (
                    <section
                        className="py-3 px-4 flex flex-wrap gap-3 justify-center"
                    >
                        {filteredProducts?.map(article => (
                            <ProductCard key={article.id} id={article.id} />            
                        ))}
                    </section>
                    ) : <Outlet />
                }
        </>  
    );
}
 
export default Home;