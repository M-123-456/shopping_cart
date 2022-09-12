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
        <nav className="flex items-center justify-between gap-6 px-4 py-2 text-white md:h-16 bg-slate-600">
            <div
                onClick={onClickHome}
                className="p-3 rounded-full bg-slate-900 hover:opacity-60"
            >
                <BiHomeAlt
                    className="text-2xl hover:cursor-pointer"
                />
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
                <div
                    className="flex gap-4"
                >
                    <UserIcon />
                    <CartIcon />
                </div>
                <Search />
            </div>
        </nav>
    );
}
 
export default NavBar;