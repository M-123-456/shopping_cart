import { IUser } from './IUser';

export interface IUsers {
    allUsers: IUser[];
    loginUserId: number | undefined;
    loginUserDetails: IUser | undefined ;
    setLoginUserDetails: (user: IUser) => void;
}