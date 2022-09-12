import { useEffect } from 'react';

import { useStore } from '../../../store';

// Hooks
import { useLoginUser } from '../../../hooks/useLoginUser';

import { USERS_URL } from '../../../constants/usersUrl';

 
const UserIcon = () => {

    const loginUserDetails = useStore(state => state.loginUserDetails);

    const { loading, message, getLoginUserDetails } = useLoginUser();


    console.log(loginUserDetails)
    useEffect(() => {
        getLoginUserDetails(USERS_URL);
    },[])

    return (  
        <div
            area-label='user_icon'
            className="py-1 px-2 flex gap-4 items-center bg-pink-500 hover:opacity-75 rounded-full"
        >
            {
                loading ? 'loading user data...' :
                message ? message :
                loginUserDetails ? (
                    <div>
                        User: {loginUserDetails?.username}
                    </div>
                ) : null
            }
        </div>
    );
}
 
export default UserIcon;