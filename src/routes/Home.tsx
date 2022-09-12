import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import useStore from '../store';

// Components
import ProductCard from '../components/cards/ProductCard';
import NavBar from '../components/navbar/NavBar';

const Home = () => {

    const { pathname } = useLocation();

    const filteredProducts = useStore(state => state.filteredProducts);
    const loadProducts = useStore(state => state.loadProducts);

    useEffect(() => {
        loadProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   
    return (
        <>
            <NavBar />
                {
                    pathname === '/' ? (
                    <section
                        className="flex flex-wrap justify-center gap-3 px-4 py-3"
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