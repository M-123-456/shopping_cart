import { useNavigate } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';

import Search from './navElements/Search';
import CartIcon from './navElements/CartIcon';
import UserIcon from './navElements/UserIcon';

 
const NavBar = () => {
    const navigate = useNavigate();

    const onClickHome = () => {
        navigate('/', { replace: true });
    }

    return (  
        <nav className="px-4 h-16 bg-slate-600 text-white flex items-center justify-between gap-6">
            <div
                onClick={onClickHome}
                className="bg-slate-900 p-3 rounded-full hover:opacity-60"
            >
                <BiHomeAlt
                    className="text-2xl hover:cursor-pointer"
                />
            </div>
            <div className="flex gap-4 items-center">
                <UserIcon />
                <CartIcon />
                <Search />
            </div>
        </nav>
    );
}
 
export default NavBar;