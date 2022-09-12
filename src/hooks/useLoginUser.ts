import { useState, useCallback } from 'react';
import axios from 'axios';

import { useStore } from '../store';

// Types
import { IUser } from '../types/users/IUser';

export const useLoginUser = () => {
    const loginUserId = useStore(state => state.loginUserId);
    const setLoginUserDetails = useStore(state => state.setLoginUserDetails);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const getLoginUserDetails = async( url: string ) => {
        setLoading(true);
        try {
            const res = await axios.get<IUser[]>(url);
            if(res.status === 200) {
                const user = res.data.find(user => user.id === loginUserId);
                if(user) {
                    setLoading(false);
                    setLoginUserDetails(user);
                } else {
                    setLoading(false);
                    setMessage('User cannot be found');
                }
            }
        } catch (err) {
            setLoading(false);
            setMessage('Problem with loading user data')
        }
    }
    return { loading, message, getLoginUserDetails }
}