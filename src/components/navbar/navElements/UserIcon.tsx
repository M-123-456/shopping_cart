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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (  
        <div
            area-label='user_icon'
            className="flex items-center gap-4 px-2 py-1 bg-pink-500 rounded-full hover:opacity-75"
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