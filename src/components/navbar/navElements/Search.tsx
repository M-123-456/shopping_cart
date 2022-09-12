import { ChangeEvent, useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

import { useStore } from '../../../store';

const Search= () => {

    const filterArticles = useStore(state => state.filterProducts);

    const [searchWords, setSearchWords] = useState('');

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchWords(e.target.value);
    }

    // when input starts, start searching and filtering
    useEffect(() => {
        filterArticles(searchWords);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchWords])

    return (
        <>
            <div
                area-label="Search"    
                className="flex items-center h-8 px-2 text-black bg-white rounded-full"
            >
                <input 
                //"hidden sm:block sm:pl-3 sm:focus:outline-none"
                    className="block pl-3 focus:outline-none"
                    value={searchWords}
                    onChange={handleChange}
                />
                <FiSearch className="text-xl" />
            </div>
        </>  

    );
}
 
export default Search;